import "./globals.css";

export const metadata = {
  title: "Pokemon TCG Simulator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
