"use client";

import CircleAnimation from "@/components/CircleAimation";
import DetailsPopup from "@/components/DetailsPopup";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaHandPointer } from "react-icons/fa";
import "swiper/css";

export type Project = {
  num: string;
  name: string;
  category: string;
  description: string;
  stack: {
    name: string;
  }[];
  fe: {
    name: string;
  }[];
  be?: {
    name: string;
  }[];
  others: {
    name: string;
  }[];
  image: string;
  live: string;
  github1: string;
  github2?: string;
};

type Projects = Project[];

const projects = [
  {
    num: "01",
    name: "Blog system",
    category: "fullstack",
    description:
      "A project act as blog system that shows posts, comments, likes and manage your post lists after authentication",
    stack: [
      { name: "Next.js" },
      { name: "Nest.js" },
      { name: "React" },
      { name: "GraphQl" },
      { name: "Prisma" },
      { name: "SqlLite" },
      { name: "Turborepo" },
      { name: "Supabase" },
      { name: "Tailwind CSS" },
      { name: "Shadcn-ui" },
      { name: "Hero icons" },
      { name: "Framer-motion" },
      { name: "Zod" },
      { name: "Argon2" },
      { name: "Jwt" },
      { name: "Nestjs-passport" },
      { name: "Tanstack-react-query" },
    ],
    fe: [
      { name: "Next.js" },
      { name: "React" },
      ,
      { name: "Tailwind CSS" },
      { name: "Shadcn-ui" },
      { name: "Hero icons" },
      { name: "Framer-motion" },
      { name: "Zod" },
      { name: "Tanstack-react-query" },
    ],
    be: [
      { name: "Nest.js" },
      { name: "GraphQl" },
      { name: "Prisma" },
      { name: "SqlLite" },
      { name: "Argon2" },
      { name: "Jwt" },
      { name: "Nestjs-passport" },
    ],
    others: [{ name: "Supabase" }, { name: "Turborepo" }],
    image: "/assets/blog.png",
    live: "https://blog-system-pi.vercel.app/",
    github1: "https://github.com/mohammadrida990/blog-system",
  },
  {
    num: "02",
    name: "E-commerce",
    category: "fullstack",
    description:
      "Small ecommerce project that shows some products, select products, add to cart and checkout",
    stack: [
      { name: "Next.js" },
      { name: "Nest.js" },
      { name: "Tailwind CSS" },
      { name: "Shadcn-ui" },
      { name: "Hero icons" },
      { name: "PostgreSQL" },
      { name: "Stripe" },
      { name: "Zustand" },
    ],
    fe: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Shadcn-ui" },
      { name: "Hero icons" },
    ],
    be: [{ name: "Nest.js" }, { name: "PostgreSQL" }],
    others: [{ name: "Stripe" }],
    image: "/assets/eccomerce.png",
    live: "",
    github1: "https://github.com/mohammadrida990/eccomerce_frontend",
    github2: "https://github.com/mohammadrida990/ecommerce-backend",
  },
  {
    num: "03",
    name: "Rida Portfolio",
    category: "frontend",
    description:
      "My portfolio project that describe my resume with skills, experience education and my contact information and social media.",
    stack: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Shadcn-ui" },
      { name: "Framer-motion" },
      { name: "React-countup" },
      { name: "React-icons" },
      { name: "Swiper" },
    ],
    fe: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Shadcn-ui" },
      { name: "Framer-motion" },
      { name: "React-countup" },
      { name: "React-icons" },
    ],
    others: [{ name: "Swiper" }],
    image: "/assets/porfolio.png",
    live: "https://rida-portfolio-five.vercel.app/",
    github1: "https://github.com/mohammadrida990/rida-portfolio",
  },
] as Projects;

const leftToRight = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const rightToLeft = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-3 xl:px-0"
    >
      <DetailsPopup
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
      <div className="container mx-auto">
        <motion.div
          variants={leftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative group flex flex-col xl:flex-row xl:gap-[30px] bg-[#27272c] rounded-4xl my-6 items-center"
        >
          <motion.div
            onClick={() => setSelectedProject(projects[0])}
            initial={{ y: 0 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-4 right-4 xl:right-1/2 bg-accent/90 p-2 rounded-full shadow-lg shadow-accent/30 text-white cursor-pointer"
            title="Click to see details"
          >
            <motion.div
              animate={{
                rotate: [-10, 10, -10],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-white"
            >
              <FaHandPointer size={22} />
            </motion.div>
          </motion.div>

          <div className="w-full order-2 xl:order-none xl:justify-between xl:w-[50%] xl:min-h-[460px] flex flex-col">
            <div className="flex flex-col gap-[30px] h-[50%] px-6 pb-6">
              <div className="text-8xl font-extrabold text-outline-white leading-none text-transparent">
                {projects[0].num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {projects[0].category} project
              </h2>

              <p className="text-white/60">{projects[0].description}</p>

              <ul className="gap-3 grid grid-cols-2 lg:grid-cols-4">
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
                <span className="group relative inline-block">
                  <motion.div
                    className="h-[72px] w-[72px] flex justify-center items-center bg-white/5 rounded-full cursor-pointer shadow-lg shadow-accent/10"
                    animate={{
                      y: [0, -4, 0],
                      boxShadow: [
                        "0px 0px 8px rgba(3, 255, 153, 0.1)",
                        "0px 0px 16px rgba(3, 255, 153, 0.2)",
                        "0px 0px 8px rgba(3, 255, 153, 0.1)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Link
                      href={projects[0].live}
                      target="_blank"
                      className="w-full h-full text-center text-xs my-auto items-center flex text-accent font-extralight"
                    >
                      Launch project
                    </Link>
                  </motion.div>
                </span>

                <CircleAnimation
                  data={projects[0].github1}
                  caption="• • • FULLSTACK Repo • • •"
                />
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <div className="xl:h-[500px]">
              <div className="w-full">
                <div className="h-[435px] xl:h-[500px] relative group flex justify-center items-center rounded-sm">
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
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            variants={rightToLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="relative group flex flex-col xl:flex-row xl:gap-[30px] bg-[#27272c] rounded-4xl my-6 items-center"
          >
            <motion.div
              onClick={() => setSelectedProject(projects[1])}
              initial={{ y: 0 }}
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-4 right-4 xl:right-1/2 bg-accent/90 p-2 rounded-full shadow-lg shadow-accent/30 text-white cursor-pointer"
              title="Click to see details"
            >
              <motion.div
                animate={{
                  rotate: [-10, 10, -10],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-white"
              >
                <FaHandPointer size={22} />
              </motion.div>
            </motion.div>

            <div className="w-full order-2 xl:order-none xl:justify-between xl:w-[50%] xl:h-[460px] flex flex-col">
              <div className="flex flex-col gap-[30px] h-[50%] px-6 pb-6">
                <div className="text-8xl font-extrabold text-outline-white leading-none text-transparent">
                  {projects[1].num}
                </div>

                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {projects[1].category} project
                </h2>

                <p className="text-white/60">{projects[1].description}</p>

                <ul className="gap-3 grid grid-cols-2 lg:grid-cols-4">
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
                      className="h-[72px] w-[72px] flex justify-center items-center bg-white/5 rounded-full"
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

                  <CircleAnimation
                    data={projects[1].github1}
                    caption="• • • • • • FE Repo • • • • •"
                  />

                  {projects[1].github2 && (
                    <CircleAnimation
                      data={projects[1].github2}
                      caption="• • • • • BE Repo • • • • • •"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="w-full xl:w-[50%]">
              <div className="xl:h-[500px]">
                <div className="w-full">
                  <div className="h-[435px] xl:h-[500px] relative group flex justify-center items-center rounded-sm">
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
          </motion.div>
        </div>

        <motion.div
          variants={leftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative group flex flex-col xl:flex-row xl:gap-[30px] bg-[#27272c] rounded-4xl my-6 items-center"
        >
          <motion.div
            onClick={() => setSelectedProject(projects[2])}
            initial={{ y: 0 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-4 right-4 xl:right-1/2 bg-accent/90 p-2 rounded-full shadow-lg shadow-accent/30 text-white cursor-pointer"
            title="Click to see details"
          >
            <motion.div
              animate={{
                rotate: [-10, 10, -10],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-white"
            >
              <FaHandPointer size={22} />
            </motion.div>
          </motion.div>

          <div className="w-full order-2 xl:order-none xl:justify-between xl:w-[50%] xl:h-min-[460px] flex flex-col">
            <div className="flex flex-col gap-[30px] h-[50%] px-6 pb-6">
              <div className="text-8xl font-extrabold text-outline-white leading-none text-transparent">
                {projects[2].num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {projects[2].category} project
              </h2>

              <p className="text-white/60">{projects[2].description}</p>

              <ul className="gap-3 grid grid-cols-2 lg:grid-cols-4">
                {projects[2].stack.map((item, index) => {
                  return (
                    <li className="text-sm text-accent" key={index}>
                      {item.name}
                      {index !== projects[2].stack.length - 1 && ", "}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20" />

              <div className="flex items-center gap-4 justify-center">
                <span className="group relative inline-block">
                  <motion.div
                    className="h-[72px] w-[72px] flex justify-center items-center bg-white/5 rounded-full cursor-pointer shadow-lg shadow-accent/10"
                    animate={{
                      y: [0, -4, 0],
                      boxShadow: [
                        "0px 0px 8px rgba(3, 255, 153, 0.1)",
                        "0px 0px 16px rgba(3, 255, 153, 0.2)",
                        "0px 0px 8px rgba(3, 255, 153, 0.1)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Link
                      href={projects[2].live}
                      target="_blank"
                      className="w-full h-full text-center text-xs my-auto items-center flex text-accent font-extralight"
                    >
                      Launch project
                    </Link>
                  </motion.div>
                </span>

                <CircleAnimation
                  data={projects[2].github1}
                  caption="• • • • • • FE Repo • • • • •"
                />

                {projects[2].github2 && (
                  <CircleAnimation
                    data={projects[2].github2}
                    caption="FE Repo"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <div className="xl:h-[500px]">
              <div className="w-full">
                <div className="h-[435px] xl:h-[500px] relative group flex justify-center items-center rounded-sm">
                  <div className="w-full h-full relative">
                    <Image
                      src={projects[2].image}
                      fill
                      alt=""
                      className="object-cover p-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Work;
