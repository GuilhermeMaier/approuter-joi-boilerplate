import ThemeRegistry from "@/components/themeRegistry/themeRegistry";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import type { Metadata, Viewport } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Maier Soluções",
  description: "Boilerplate desenvolvido por Guilherme Maier",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/favicon_light.png",
        href: "/images/favicon_light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon_dark.png",
        href: "/images/favicon_dark.png",
      },
    ],
  },
  applicationName: "Boilerplate",
  authors: [
    {
      name: "Guilherme Maier",
      url: "https://github.com/GuilhermeMaier",
    },
  ],
  creator: "Guilherme Maier",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeRegistry>{children}</ThemeRegistry>
    </html>
  );
}
