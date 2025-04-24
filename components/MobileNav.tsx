"use client";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { DialogTitle } from "@radix-ui/react-dialog";

const links = [
  { name: "Home", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <VisuallyHidden>
        <DialogTitle>My Dialog Title</DialogTitle>
      </VisuallyHidden>
      <SheetContent className="flex flex-col">
        <div className="text-center text-2xl mt-32 mb-40">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Rida
              <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map((link) => (
            <div key={link.name}>
              {pathname === link.path ? (
                <motion.div
                  className="inline-flex"
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  {Array.from(link.name).map((char, index) => (
                    <motion.span
                      key={index}
                      className="inline-block text-accent border-accent border-b-2"
                      initial={{ y: 0 }}
                      animate={{ y: [-10, 10, -10, 0] }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                        duration: 2,
                        delay: index * 0.1,
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
              ) : (
                <Link
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className="capitalize text-white transition-all duration-300 font-medium text-xl hover:text-accent/80"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
