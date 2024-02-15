"use client";

import { useEffect } from "react";

type GoogleAdsenseProps = {
  client: string;
  slot: string;
  style?: React.CSSProperties;
};

declare global {
  interface Window {
    adsbygoogle: { [key: string]: unknown }[];
  }
}

export const GoogleAdsenseInsert = ({
  client,
  slot,
  style = { display: "block" },
}: GoogleAdsenseProps) => {
  useEffect(() => {
    const adsScript = document.createElement("script");
    adsScript.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    adsScript.async = true;
    document.body.appendChild(adsScript);

    try {
      // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }

    return () => {
      document.body.removeChild(adsScript);
    };
  }, []);

  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID}
        // TODO: need slot id
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};
