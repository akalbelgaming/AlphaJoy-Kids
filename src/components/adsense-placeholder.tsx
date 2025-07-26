
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
  const observerRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    const adElement = adRef.current;
    if (!adElement) return;

    const pushAd = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error("AdSense error:", err);
      }
    };

    const observer = new ResizeObserver(entries => {
      // We only want to run this once.
      if (entries[0].contentRect.width > 0) {
        pushAd();
        // Once the ad is pushed, we don't need to observe anymore.
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      }
    });

    observerRef.current = observer;
    observer.observe(adElement);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div ref={adRef} className={cn("w-full", className)}>
      <div
        className={cn(
          "flex w-full items-center justify-center text-black min-h-[50px] bg-transparent"
        )}
      >
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-3781633352100587" // Your AdSense Publisher ID
          data-ad-slot="5952924933" // Your AdSense Ad Slot ID
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  );
}
