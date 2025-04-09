"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full relative h-full">
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className="w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] absolute mix-blend-lighten rounded-full overflow-hidden"
        >
          <Image
            className="object-contain"
            src="/assets/me.JPG"
            priority
            quality={100}
            fill
            alt=""
          />
        </motion.div>

        <motion.svg
          className="w-[305] h-[305px] xl:h-[505px] xl:w-[505px]"
          fill="transparent"
          viewBox="0 0 505 505"
          xmlns={"http://www.w3.org/2000/svg"}
        >
          <motion.circle
            cx="250"
            cy="250"
            r="260"
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
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
