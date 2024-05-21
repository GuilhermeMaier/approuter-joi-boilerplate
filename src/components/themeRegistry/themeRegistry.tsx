"use client";
import { CssBaseline } from "@mui/joy";
import { CssVarsProvider, getInitColorSchemeScript } from "@mui/joy/styles";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import NextAppDirEmotionCacheProvider from "./emotionCache";
import theme from "./theme";
import ThemeToggle from "./themeToggle";

const inter = Inter({ subsets: ["latin"] });
export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "joy" }}>
      <CssVarsProvider theme={theme} defaultMode="system">
        <CssBaseline />
        <ThemeToggle />
        <body className={inter.className}>
          {getInitColorSchemeScript({ defaultMode: "system" })}
          {children}
        </body>
      </CssVarsProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
