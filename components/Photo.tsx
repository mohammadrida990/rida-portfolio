"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full relative h-full">
      <motion.div
        initial={{ width: 0, opacity: 0, y: "-100vh" }}
        animate={{ width: "100%", opacity: 1, y: 0 }}
        transition={{
          width: { duration: 2, ease: "easeInOut", delay: 3 },
          opacity: { duration: 2, ease: "easeInOut", delay: 3 },
          y: { duration: 2, ease: "easeInOut", delay: 3 },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
        >
          <div className="w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] absolute overflow-hidden rounded-full">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 4,
                  duration: 3,
                  ease: "easeInOut",
                },
              }}
              className="w-full h-full mix-blend-lighten"
            >
              <Image
                className="object-cover"
                src="/assets/me.png"
                priority
                quality={100}
                fill
                alt=""
              />
            </motion.div>
          </div>

          <motion.svg
            className="w-[305] h-[305px] xl:h-[405px] xl:w-[405px]"
            fill="transparent"
            viewBox="0 0 405 405"
            xmlns={"http://www.w3.org/2000/svg"}
          >
            <motion.circle
              cx="200"
              cy="200"
              r="210"
              stroke="#00ff99"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
