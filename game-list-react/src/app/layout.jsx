import "../index.css";

export const metadata = {
  title: "메트로배니아 추천 사이트",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
