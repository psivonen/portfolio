"use client";

import "./globals.css";
import { Manrope, Inter_Tight, Inter } from "next/font/google";
import { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const manrope = Manrope({ subsets: ["latin"] });
export const interTight = Inter_Tight({ subsets: ["latin"] });
export const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
      <html lang="fi">
        <head>
          <title>Petra Sivonen - Portfolio</title>
        </head>
        <body>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          {children}
          <Footer />
        </body>
      </html>
  );
};

export default RootLayout;
