import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Purple Orange® — Make your product easier to understand",
  description: "Product videos, SaaS explainers and ad creatives that help technology brands communicate their value clearly.",
  metadataBase: new URL("https://purpleorange-studio.vercel.app"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
