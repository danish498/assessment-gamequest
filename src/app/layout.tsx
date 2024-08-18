import type { Metadata } from "next";
import {
  Inter,
  Press_Start_2P,
  Roboto_Mono,
  Wallpoet,
  Prosto_One,
  Poppins,
  Aoboshi_One,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Sidebar from "@/components/common/sidebar";
import Footer from "@/components/common/footer";
import StoreProvider from "./StoreProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Poppins({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "500", "600", "700"],
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});
const wall_poet = Wallpoet({
  subsets: ["latin"],
  variable: "--font-wall-poet",
  display: "swap",
  weight: ["400"],
});

const press_start2p = Press_Start_2P({
  subsets: ["latin"],
  variable: "--font-press_start2p",
  display: "swap",
  weight: ["400"],
});
const prosto_one = Prosto_One({
  subsets: ["latin"],
  variable: "--font-prosto-one",
  display: "swap",
  weight: ["400"],
});
const abonsi_one = Aoboshi_One({
  subsets: ["latin"],
  variable: "--font-abonsi-one",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "GameQuest",
  description: "Place, where you play your favorite games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto_mono.variable} ${press_start2p.variable} ${wall_poet.variable} ${prosto_one.variable}
        ${abonsi_one.variable}
        `}
      >
        <StoreProvider>
          <Sidebar />
          <Header />
          {children}
          <Footer />
          <Toaster />
        </StoreProvider>
      </body>
    </html>
  );
}
