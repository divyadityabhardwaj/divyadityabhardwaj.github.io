"use client";
import { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import Image from "next/image";

// Define a clear type for our track data
interface Track {
  name: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  url: string;
  isPlaying: boolean;
}

export function SpotifyNowPlaying() {
  const [track, setTrack] = useState<Track | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const res = await fetch("/api/spotify");

        if (res.ok) {
          const data = await res.json();
          setTrack(data);
        } else {
          setTrack(null);
        }
      } catch (error) {
        console.error("Failed to fetch Spotify track:", error);
        setTrack(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTrack();
    // Refresh every 30 seconds
    const interval = setInterval(fetchTrack, 30000);
    return () => clearInterval(interval);
  }, []);

  // Loading skeleton
  if (loading) {
    return (
      <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 rounded-lg border border-zinc-800/50 backdrop-blur-sm">
        <div className="w-16 h-16 bg-zinc-700/50 rounded-md animate-pulse" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-32 bg-zinc-700/50 rounded animate-pulse" />
          <div className="h-3 w-24 bg-zinc-700/50 rounded animate-pulse" />
        </div>
      </div>
    );
  }

  // If not playing, show offline state
  if (!track || !track.isPlaying) {
    return (
      <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-zinc-900/30 to-zinc-800/30 rounded-lg border border-zinc-800/30 backdrop-blur-sm">
        <div className="w-16 h-16 bg-zinc-800/50 rounded-md flex items-center justify-center">
          <FaSpotify className="w-8 h-8 text-zinc-600" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-zinc-400">
            Not listening right now
          </p>
          <p className="text-xs text-zinc-500">Offline or taking a break 🎧</p>
        </div>
      </div>
    );
  }

  // Now playing with album art
  return (
    <a
      href={track.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 p-4 bg-gradient-to-br from-green-950/20 to-zinc-900/50 rounded-lg border border-green-900/30 backdrop-blur-sm hover:border-green-700/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-900/20"
    >
      {/* Album Art */}
      <div className="relative w-16 h-16 flex-shrink-0">
        <Image
          src={track.albumImageUrl}
          alt={`${track.album} cover`}
          width={64}
          height={64}
          className="rounded-md shadow-lg"
          unoptimized
        />
        {/* Pulsing indicator */}
        <div className="absolute -top-1 -right-1 w-3 h-3">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
        </div>
      </div>

      {/* Track Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <FaSpotify className="w-4 h-4 text-green-500 flex-shrink-0" />
          <span className="text-xs text-green-400 font-medium">
            Now Playing
          </span>
        </div>
        <p className="text-sm font-semibold text-white truncate group-hover:text-green-400 transition-colors">
          {track.name}
        </p>
        <p className="text-xs text-zinc-400 truncate">{track.artist}</p>
      </div>

      {/* Animated bars */}
      <div className="flex items-end gap-0.5 h-5 ml-2">
        <div
          className="w-1 bg-green-500 rounded-full animate-music-bar-1"
          style={{ animationDelay: "0ms" }}
        />
        <div
          className="w-1 bg-green-500 rounded-full animate-music-bar-2"
          style={{ animationDelay: "150ms" }}
        />
        <div
          className="w-1 bg-green-500 rounded-full animate-music-bar-3"
          style={{ animationDelay: "300ms" }}
        />
      </div>
    </a>
  );
}
