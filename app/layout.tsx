import { GoogleAdsenseHead } from "@/app/_components/GoogleAdsense/head";
import { GoogleAnalytics } from "@/app/_components/GoogleAnalytics";
import { Providers } from "@/app/_src/configs/Providers";
import { Container } from "@/app/_src/layouts/Container";
import type { Metadata } from "next";
import { Suspense } from "react";
export const metadata: Metadata = {
  verification: {
    google:
      process.env.NODE_ENV !== "production"
        ? ""
        : process.env.NEXT_PUBLIC_SEARCH_CONSOLE_ID,
  },
  title: "JSDoc Document Online Generator",
  description:
    "Generates JSDoc document for free and online. Uploaded JSDoc will be deleted in 30 minutes for security reasons.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Suspense>
          <GoogleAnalytics />
          <GoogleAdsenseHead />
        </Suspense>
      </head>
      <body>
        <Providers>
          <Container serverComponent={children} />
        </Providers>
      </body>
    </html>
  );
}
