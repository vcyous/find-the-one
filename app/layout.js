import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Find The One",
  description: "A dating apps to help you find your perfect match.",
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
