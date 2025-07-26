
"use client";

import { cn } from "@/lib/utils";
import React, { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

/**
 * A component that renders a Google AdSense banner ad unit for the website.
 */
export function AdsenseBanner({ className }: { className?: string }) {

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div
      className={cn(
        "flex w-full items-center justify-center text-black min-h-[50px] bg-transparent",
        className
      )}
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3781633352100587" // Your AdSense Publisher ID
        data-ad-slot="5952924933" // Placeholder Ad Slot ID for a responsive ad unit
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
