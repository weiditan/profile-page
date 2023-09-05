import "../scss/globals.scss";
import "../scss/theme.scss";
import type { Metadata } from "next";

import { ReactNode } from "react";
import { Providers } from "./providers";
import NavHeader from "@/components/NavHeader";

export const metadata: Metadata = { title: "PROFILE - Tan Wei Di" };

export default function RootLayout({ children }: {
  children: ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={"text-base"}>
        <Providers>
          <NavHeader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
