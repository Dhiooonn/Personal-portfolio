"use client";

import { Player } from "@lottiefiles/react-lottie-player";

export default function LottiePlayer() {
  return (
    <Player
      autoplay
      loop
      src="/asset/butterfly.json"
      className="w-[clamp(40px,5vw,80px)] h-[clamp(40px,5vw,80px)]"
    />
  );
}
