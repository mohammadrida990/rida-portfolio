"use client";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  const [showBorder, setShowBorder] = useState(true);

  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <motion.span className="flex justify-center xl:justify-start">
              {"Frontend Web Developer".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 2,
                    delay: 2.4 + index * 0.05,
                    ease: "easeOut",
                  }}
                >
                  <span className="text-2xl text-accent">
                    {char === " " ? "\u00A0" : char}
                  </span>
                </motion.span>
              ))}
            </motion.span>

            <h1 className="h1">
              Hello I&apos;m <br />
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 2.4 }}
                className={`font-main text-[68px] xl:text-[100px] text-accent whitespace-nowrap overflow-hidden px-10 xl:pl-0 ${
                  showBorder ? "border-r-4 border-accent animate-typing" : ""
                }`}
                onAnimationComplete={() => {
                  setTimeout(() => setShowBorder(false), 500);
                }}
              >
                Mohammad Rida
              </motion.div>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/90 mx-2">
              I craft responsive, user-focused web applications using modern
              frontend technologies. With a strong foundation in HTML, CSS,
              JavaScript, and frameworks like{" "}
              <span className="text-accent">Vue</span>,
              <span className="text-accent">React</span>,
              <span className="text-accent">Next.js</span> and{" "}
              <span className="text-accent">Nest.js</span>, I bring interfaces
              to life through clean code, smooth animations, and thoughtful UX.
              Whether it&apos;s building from scratch or collaborating in
              cross-functional teams, I turn ideas into pixel-perfect digital
              experiences.
            </p>

            <div className="flex flex-col gap-8 xl:flex-row justify-center items-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="mr-4 uppercase flex items-center gap-2"
              >
                <a href="/assets/cv.pdf" target="_blank" download>
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-4"
                  iconStyles="
                    border border-accent rounded-full w-9 h-9 text-center flex justify-center
                    items-center text-accent items-center text-base hover:bg-accent hover:text-primary
                    transition-all duration-500
                  "
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-12">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
};

export default Home;
