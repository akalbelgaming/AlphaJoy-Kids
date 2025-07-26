
'use client';

import { useEffect, useState } from 'react';
import { Capacitor } from '@capacitor/core';
import { WebLandingPage } from '@/components/web-landing-page';
import { AppHomePage } from '@/components/app-home-page';
import { Loader2 } from 'lucide-react';

export default function Home() {
  const [isNative, setIsNative] = useState<boolean | null>(null);

  useEffect(() => {
    // This check runs only on the client-side
    setIsNative(Capacitor.isNativePlatform());
  }, []);

  // Show a loading indicator until the platform is determined
  if (isNative === null) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-background">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
      </div>
    );
  }

  // If it's a native app (iOS/Android), show the app's home page.
  // Otherwise (on a web browser), show the web landing page.
  return isNative ? <AppHomePage /> : <WebLandingPage />;
}
