"use client";

import { GA_TAG_ID, IS_GA_TAG, pageView } from "@/app/_src/configs/gtag";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

const GoogleAnalytics = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		if (!IS_GA_TAG) {
			return;
		}
		const url = pathname + searchParams.toString();
		pageView(url);
	}, [pathname, searchParams]);

	return (
		<>
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_TAG_ID}`}
			/>
			<Script id="gtag-init" strategy="afterInteractive">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TAG_ID}', {
            page_path: window.location.pathname,
          });
        `}
			</Script>
		</>
	);
};

export default GoogleAnalytics;
