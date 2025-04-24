"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <nav>
      <ul className="flex gap-8">
        {links.map((link) => (
          <li key={link.name}>
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
                className="capitalize text-white transition-all duration-300 text-lg font-semibold hover:text-accent/80"
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
