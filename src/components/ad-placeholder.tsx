
"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

/**
 * A component that renders a real Google AdMob banner ad unit for the App.
 */
export function AdBanner({ className }: { className?: string }) {
  const adRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    const adElement = adRef.current;
    if (!adElement) return;

    const pushAd = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error("AdMob error:", err);
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
          data-ad-client="ca-pub-3781633352100587"
          data-ad-slot="6590213011"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  );
}
