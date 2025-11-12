import type { Metadata } from "next";

import "styles/globals.css";

export const metadata: Metadata = {
  title: "Daily Disaffirmation App",
  description: "Daily Disaffirmation App",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[rgba(255,247,220,1)] min-h-screen">
        {children}
      </body>
    </html>
  );
}
