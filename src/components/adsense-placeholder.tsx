
"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

/**
 * A component that renders a Google AdSense banner ad unit for the website.
 */
export function AdsenseBanner({ className }: { className?: string }) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pushAd = () => {
      try {
        const ad_container = adRef.current;
        if (ad_container && ad_container.offsetWidth === 0) {
          // Ad container has no width, retry after a short delay
          setTimeout(pushAd, 50);
          return;
        }
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error("AdSense error:", err);
      }
    };

    // Initial push
    pushAd();
  }, []);

  return (
    <div
      ref={adRef}
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
