import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Purple Orange® — Motion for the digital world",
  description: "Independent creative studio making motion systems, launch films and visual stories for technology brands.",
  metadataBase: new URL("https://purpleorange-studio.vercel.app"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
