import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { cookies } from "next/headers";
import { TRPCReactProvider } from "~/trpc/react";
import Navigation from "./_components/navbar/navbar";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "SongSuggest",
  description:
    "Unlock a world of musical discovery! SongSuggest GPT curates your next favorite artists, tailored to your preferences.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} bg-midnight-blue`}>
        <Providers>
          <Navigation />
          <TRPCReactProvider cookies={cookies().toString()}>
            {children}
          </TRPCReactProvider>
        </Providers>
      </body>
    </html>
  );
}
