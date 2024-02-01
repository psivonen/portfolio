"use client";

import "./globals.css";
import { Inter, Unbounded, Montserrat } from "next/font/google";
import { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const inter = Inter({ subsets: ["latin"] });
export const unbounded = Unbounded({ subsets: ["latin"] });
export const montserrat = Montserrat({ subsets: ["latin"] });

const RootLayout = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="fi">
      <head>
        <title>
          Petra Sivonen - Portfolio
        </title>
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
