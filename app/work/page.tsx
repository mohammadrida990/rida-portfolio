"use client";

import CircleAnimation from "@/components/CircleAimation";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import "swiper/css";

const projects = [
  {
    num: "01",
    name: "E-commerce",
    category: "fullstack",
    description: "Small ecommerce project to buy products online",
    stack: [
      { name: "Next.js" },
      { name: "Nest.js" },
      { name: "Tailwind CSS" },
      { name: "Shadncn-ui" },
      { name: "Hero icons" },
      { name: "PostgreSQL" },
      { name: "Stripe" },
      { name: "Zustand" },
    ],
    image: "/assets/eccomerce.png",
    live: "",
    github1: "https://github.com/mohammadrida990/eccomerce_frontend",
    github2: "https://github.com/mohammadrida990/ecommerce-backend",
  },
  {
    num: "02",
    name: "Rida Portfolio",
    category: "frontend",
    description: "My portfolio project that describe my resume",
    stack: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Shadncn-ui" },
      { name: "Framer-motion" },
      { name: "React-countup" },
      { name: "React-icons" },
      { name: "Swiper" },
    ],
    image: "/assets/porfolio.png",
    live: "",
    github1: "https://github.com/mohammadrida990/rida-portfolio",
  },
];
const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] bg-[#27272c] rounded-4xl my-6 items-center">
          <div className="w-full order-2 xl:order-none xl:justify-between xl:w-[50%] xl:h-[460px] flex flex-col">
            <div className="flex flex-col gap-[30px] h-[50%] px-6">
              <div className="text-8xl font-extrabold text-outline-white leading-none text-transparent">
                {projects[0].num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {projects[0].category} project
              </h2>

              <p className="text-white/60">{projects[0].description}</p>

              <ul className="gap-4 grid grid-cols-2 xl:grid-cols-3">
                {projects[0].stack.map((item, index) => {
                  return (
                    <li className="text-sm text-accent" key={index}>
                      {item.name}
                      {index !== projects[0].stack.length - 1 && ", "}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20" />

              <div className="flex items-center gap-4 justify-center">
                <span>
                  <motion.div
                    className="h-[72px] w-[72px] flex justify-center items-center"
                    whileHover={{
                      rotate: 45,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    <BsArrowUpRight className="text-white text-3xl hover:text-accent" />
                  </motion.div>
                </span>

                <CircleAnimation data={projects[0].github1} caption="FE Repo" />

                {projects[0].github2 && (
                  <CircleAnimation
                    data={projects[0].github2}
                    caption="BE Repo"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <div className="xl:h-[520px] mb-12 ">
              <div className="w-full">
                <div className="h-[435px] xl:h-[570px] relative group flex justify-center items-center rounded-sm">
                  {/* <div className="absolute top-0 bottom-0 w-full h-full z-10 bg-black/10" /> */}
                  <div className="w-full h-full relative">
                    <Image
                      src={projects[0].image}
                      fill
                      alt=""
                      className="object-cover p-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row xl:gap-[30px] bg-[#27272c] rounded-4xl my-6 items-center">
          <div className="w-full order-2 xl:order-none xl:justify-between xl:w-[50%] xl:h-[460px] flex flex-col">
            <div className="flex flex-col gap-[30px] h-[50%] px-6">
              <div className="text-8xl font-extrabold text-outline-white leading-none text-transparent">
                {projects[1].num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {projects[1].category} project
              </h2>

              <p className="text-white/60">{projects[1].description}</p>

              <ul className="gap-4 grid grid-cols-2 xl:grid-cols-3">
                {projects[1].stack.map((item, index) => {
                  return (
                    <li className="text-sm text-accent" key={index}>
                      {item.name}
                      {index !== projects[1].stack.length - 1 && ", "}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20" />

              <div className="flex items-center gap-4 justify-center">
                <span>
                  <motion.div
                    className="h-[72px] w-[72px] flex justify-center items-center"
                    whileHover={{
                      rotate: 45,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    <BsArrowUpRight className="text-white text-3xl hover:text-accent" />
                  </motion.div>
                </span>

                <CircleAnimation data={projects[1].github1} caption="FE Repo" />

                {projects[1].github2 && (
                  <CircleAnimation
                    data={projects[1].github2}
                    caption="FE Repo"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <div className="xl:h-[520px] mb-12">
              <div className="w-full">
                <div className="h-[435px] xl:h-[570px] relative group flex justify-center items-center rounded-sm">
                  {/* <div className="absolute top-0 bottom-0 w-full h-full z-10 bg-black/10" /> */}

                  <div className="w-full h-full relative">
                    <Image
                      src={projects[1].image}
                      fill
                      alt=""
                      className="object-cover p-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
