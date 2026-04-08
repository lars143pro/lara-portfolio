import { Sora } from "next/font/google";
import Head from "next/head";
import { motion } from "framer-motion";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";
import Cursor from "../components/Cursor"; // Import the new component

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative overflow-hidden`}
    >
      {/* 1. THE GLOWING CURSOR - Sits on top of everything */}
      <Cursor />

      {/* metadata */}
      <Head>
        <title>Lara Nerona | Creative Editor & Graphic Designer</title>
        <link rel="icon" href="/favicon.jpg" />
        <meta
          name="description"
          content="Lara Nerona is a professional Video Editor, Graphic Designer, and E-commerce Specialist."
        />
        <meta name="theme-color" content="#00f2ff" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="h-full w-full"
      >
        {children}
      </motion.div>

      {/* Background Atmosphere */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full -z-10 pointer-events-none" />
    </main>
  );
};

export default Layout;