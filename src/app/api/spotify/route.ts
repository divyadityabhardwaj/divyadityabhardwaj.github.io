import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'; 
export const revalidate = 0; 

const CLIENT_ID = process.env.NEXT_SPOTIFY_CLIENT_ID!;
const CLIENT_SECRET = process.env.NEXT_SPOTIFY_CLIENT_SECRET!;
const REFRESH_TOKEN = process.env.NEXT_SPOTIFY_REFRESH_TOKEN!;

// This function gets a fresh access token using your refresh token.
async function getAccessToken() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(
        `${CLIENT_ID}:${CLIENT_SECRET}`
      ).toString("base64")}`,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
    }),
  });

  const data = await response.json();
  if (data.error || !response.ok) {
    throw new Error(data.error_description || "Failed to get access token.");
  }
  return data.access_token;
}

// The main API route handler
export async function GET() {
  // Check if the refresh token is available. If not, the setup is incomplete.
  if (!REFRESH_TOKEN) {

    return NextResponse.json(
      { error: "Spotify refresh token is not set in environment variables." },
      { status: 500 }
    );
  }

  try {
    const accessToken = await getAccessToken();

    // Fetch currently playing track from Spotify API
    const playerResponse = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        // Using Next.js revalidation to avoid caching stale data
        next: { revalidate: 0 },
      }
    );

    // If nothing is playing, Spotify returns a 204 No Content status
    if (playerResponse.status === 204) {
      return NextResponse.json({ isPlaying: false });
    }

    if (!playerResponse.ok) {
      const errorText = await playerResponse.text();
      throw new Error(`Failed to fetch from Spotify: ${errorText}`);
    }

    const trackData = await playerResponse.json();

    if (!trackData || !trackData.item) {
      return NextResponse.json({ isPlaying: false });
    }

    const track = {
      isPlaying: trackData.is_playing,
      name: trackData.item.name,
      artist: trackData.item.artists
        .map((artist: any) => artist.name)
        .join(", "),
      album: trackData.item.album.name,
      albumImageUrl: trackData.item.album.images[0]?.url,
      url: trackData.item.external_urls.spotify,
    };

    return NextResponse.json(track);
  } catch (error) {
    console.error("Now Playing API Error:", error);
    // Return a generic error shape that the frontend can handle
    return NextResponse.json(
      { isPlaying: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
