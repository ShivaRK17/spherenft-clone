import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] ,variable:'--font-inter',display:'swap'});
const Cabinet = localFont({ src: './fonts/CabinetGrotesk-Medium.otf', variable:'--font-cabinet',display:'swap'})
export const metadata = {
  title: "Playsphere",
  description: "Playsphere Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${Cabinet.variable}`}>{children}</body>
    </html>
  );
}
