"use client";

import Link from "next/link";
import Navbar from "./nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="py-7">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-5xl font-semibold">
            {"Rida".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ color: "#ffffff" }}
                animate={{ color: "#02ff99" }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
                className="font-main mr-1"
              >
                {char}
              </motion.span>
            ))}
            <span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Navbar />

          <Link
            href="https://www.linkedin.com/in/mohammad-rida-06399163/"
            target="_blank"
          >
            <Button className="cursor-pointer">Hire me</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
