"use client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { theme } from "./theme";
import ThemeToggle from "./themeToggle";

const inter = Inter({ subsets: ["latin"] });
export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <body className={inter.className}>
        <ThemeToggle />
        {children}
      </body>
    </ThemeProvider>
  );
}
