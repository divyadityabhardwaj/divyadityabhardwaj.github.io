import { NextRequest, NextResponse } from "next/server";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;
const REDIRECT_URI = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI!;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json(
      { error: "Authorization code not found." },
      { status: 400 }
    );
  }

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(
          `${CLIENT_ID}:${CLIENT_SECRET}`
        ).toString("base64")}`,
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: REDIRECT_URI,
      }),
    });

    const data = await response.json();

    if (data.error || !response.ok) {
        throw new Error(data.error_description || "Failed to fetch tokens.");
    }
    
    const refreshToken = data.refresh_token;

    
    // Redirect user to the homepage with a success message
    const homeUrl = new URL("/", request.url);
    homeUrl.searchParams.set("status", "success");
    return NextResponse.redirect(homeUrl);

  } catch (error) {
    console.error("OAuth Error:", error);
    const homeUrl = new URL("/", request.url);
    homeUrl.searchParams.set("status", "error");
    return NextResponse.redirect(homeUrl);
  }
}