"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <nav>
      <ul className="flex gap-8">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.path}
              className={`capitalize  transition-all duration-300 font-medium text-lg font-semibold hover:text-accent/80 ${
                pathname === link.path
                  ? "text-accent border-accent border-b-2"
                  : "text-white"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
