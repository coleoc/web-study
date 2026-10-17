import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../index.css";

export const metadata: Metadata = {
    title: "메트로배니아 추천 사이트",
    icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ko">
            <body>{children}</body>
        </html>
    );
}