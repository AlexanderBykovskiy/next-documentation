import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../src/app/styles/globals.scss";
import {MainMenu} from "@/src/features/main-menu";
import {Suspense} from "react";
import Loading from "@/app/loading";
import {Header} from "@/src/widges/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="ru">
      <body className="page-layout">
        <div className="content-wrapper">
            <Header/>
        </div>
        <div className="main-content-block content-wrapper content-container">
            <aside>
                <MainMenu/>
            </aside>
            <Suspense fallback={<Loading/>}>
                {children}
            </Suspense>
        </div>
        <footer>footer</footer>
      </body>
    </html>
  );
}
