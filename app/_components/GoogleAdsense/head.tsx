"use client";

import Script from "next/script";

export const GoogleAdsenseHead = () => {
  // if (process.env.NODE_ENV !== "production") {
  //   return null;
  // }

  return (
    <Script
      id="Adsense-banner"
      async
      strategy="lazyOnload"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID}`}
      crossOrigin="anonymous"
    />
  );
};
