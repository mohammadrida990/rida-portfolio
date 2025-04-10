"use client";

import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
  { name: "Work", path: "/work" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

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
            <Link
              key={link.name}
              href={link.path}
              className={`capitalize transition-all font-medium text-xl hover:text-accent/80 ${
                pathname === link.path
                  ? "text-accent border-accent border-b-2"
                  : "text-white"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
