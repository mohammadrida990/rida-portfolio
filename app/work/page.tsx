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
import projects, { Project } from "./Projects";

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
        {/* 00 Construction */}
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

          <div className="w-full order-2 xl:order-none xl:justify-between xl:w-[50%] xl:h-min-[460px] flex flex-col">
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
                  caption="• • • • • • FE Repo • • • • •"
                />

                {projects[0].github2 && (
                  <CircleAnimation
                    data={projects[0].github2}
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

        {/* 01 Blog system */}
        <motion.div
          variants={leftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative group flex flex-col xl:flex-row xl:gap-[30px] bg-[#27272c] rounded-4xl my-6 items-center"
        >
          <motion.div
            onClick={() => setSelectedProject(projects[1])}
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
                      href={projects[1].live}
                      target="_blank"
                      className="w-full h-full text-center text-xs my-auto items-center flex text-accent font-extralight"
                    >
                      Launch project
                    </Link>
                  </motion.div>
                </span>

                <CircleAnimation
                  data={projects[1].github1}
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

        {/* 02 Coffee shop */}
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

        {/* 03 E-commerce */}
        <div className="overflow-hidden">
          <motion.div
            variants={rightToLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="relative group flex flex-col xl:flex-row xl:gap-[30px] bg-[#27272c] rounded-4xl my-6 items-center"
          >
            <motion.div
              onClick={() => setSelectedProject(projects[3])}
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
                  {projects[3].num}
                </div>

                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {projects[3].category} project
                </h2>

                <p className="text-white/60">{projects[3].description}</p>

                <ul className="gap-3 grid grid-cols-2 lg:grid-cols-4">
                  {projects[3].stack.map((item, index) => {
                    return (
                      <li className="text-sm text-accent" key={index}>
                        {item.name}
                        {index !== projects[3].stack.length - 1 && ", "}
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
                    data={projects[3].github1}
                    caption="• • • • • • FE Repo • • • • •"
                  />

                  {projects[3].github2 && (
                    <CircleAnimation
                      data={projects[3].github2}
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
                        src={projects[3].image}
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

        {/* 04 Scrolling animation*/}
        <motion.div
          variants={leftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative group flex flex-col xl:flex-row xl:gap-[30px] bg-[#27272c] rounded-4xl my-6 items-center"
        >
          <motion.div
            onClick={() => setSelectedProject(projects[4])}
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
                {projects[4].num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {projects[4].category} project
              </h2>

              <p className="text-white/60">{projects[4].description}</p>

              <ul className="gap-3 grid grid-cols-2 lg:grid-cols-4">
                {projects[4].stack.map((item, index) => {
                  return (
                    <li className="text-sm text-accent" key={index}>
                      {item.name}
                      {index !== projects[4].stack.length - 1 && ", "}
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
                      href={projects[4].live}
                      target="_blank"
                      className="w-full h-full text-center text-xs my-auto items-center flex text-accent font-extralight"
                    >
                      Launch project
                    </Link>
                  </motion.div>
                </span>

                <CircleAnimation
                  data={projects[4].github1}
                  caption="• • • • • • FE Repo • • • • •"
                />

                {projects[4].github2 && (
                  <CircleAnimation
                    data={projects[4].github2}
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
                      src={projects[4].image}
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

        {/* 05 Rida Portfolio */}
        <motion.div
          variants={leftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative group flex flex-col xl:flex-row xl:gap-[30px] bg-[#27272c] rounded-4xl my-6 items-center"
        >
          <motion.div
            onClick={() => setSelectedProject(projects[5])}
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
                {projects[5].num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {projects[5].category} project
              </h2>

              <p className="text-white/60">{projects[5].description}</p>

              <ul className="gap-3 grid grid-cols-2 lg:grid-cols-4">
                {projects[5].stack.map((item, index) => {
                  return (
                    <li className="text-sm text-accent" key={index}>
                      {item.name}
                      {index !== projects[5].stack.length - 1 && ", "}
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
                      href={projects[5].live}
                      target="_blank"
                      className="w-full h-full text-center text-xs my-auto items-center flex text-accent font-extralight"
                    >
                      Launch project
                    </Link>
                  </motion.div>
                </span>

                <CircleAnimation
                  data={projects[5].github1}
                  caption="• • • • • • FE Repo • • • • •"
                />

                {projects[5].github2 && (
                  <CircleAnimation
                    data={projects[5].github2}
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
                      src={projects[5].image}
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

        {/* 06 Admin dashboard */}
        <motion.div
          variants={leftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative group flex flex-col xl:flex-row xl:gap-[30px] bg-[#27272c] rounded-4xl my-6 items-center"
        >
          <motion.div
            onClick={() => setSelectedProject(projects[6])}
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
                {projects[6].num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {projects[6].category} project
              </h2>

              <p className="text-white/60">{projects[6].description}</p>

              <ul className="gap-3 grid grid-cols-2 lg:grid-cols-4">
                {projects[6].stack.map((item, index) => {
                  return (
                    <li className="text-sm text-accent" key={index}>
                      {item.name}
                      {index !== projects[6].stack.length - 1 && ", "}
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
                      href={projects[6].live}
                      target="_blank"
                      className="w-full h-full text-center text-xs my-auto items-center flex text-accent font-extralight"
                    >
                      Launch project
                    </Link>
                  </motion.div>
                </span>

                <CircleAnimation
                  data={projects[6].github1}
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
                      src={projects[6].image}
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

        {/* 07 Animation sliders */}
        <motion.div
          variants={leftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative group flex flex-col xl:flex-row xl:gap-[30px] bg-[#27272c] rounded-4xl my-6 items-center"
        >
          <motion.div
            onClick={() => setSelectedProject(projects[7])}
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
                {projects[7].num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {projects[7].category} project
              </h2>

              <p className="text-white/60">{projects[7].description}</p>

              <ul className="gap-3 grid grid-cols-2 lg:grid-cols-4">
                {projects[7].stack.map((item, index) => {
                  return (
                    <li className="text-sm text-accent" key={index}>
                      {item.name}
                      {index !== projects[7].stack.length - 1 && ", "}
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
                      href={projects[7].live}
                      target="_blank"
                      className="w-full h-full text-center text-xs my-auto items-center flex text-accent font-extralight"
                    >
                      Launch project
                    </Link>
                  </motion.div>
                </span>

                <CircleAnimation
                  data={projects[7].github1}
                  caption="• • • • • • FE Repo • • • • •"
                />

                {projects[7].github2 && (
                  <CircleAnimation
                    data={projects[7].github2}
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
                      src={projects[7].image}
                      fill
                      alt=""
                      className="object-contain p-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 08 smokers vibes */}
        <motion.div
          variants={leftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative group flex flex-col xl:flex-row xl:gap-[30px] bg-[#27272c] rounded-4xl my-6 items-center"
        >
          <motion.div
            onClick={() => setSelectedProject(projects[8])}
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
                {projects[8].num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {projects[8].category} project
              </h2>

              <p className="text-white/60">{projects[8].description}</p>

              <ul className="gap-3 grid grid-cols-2 lg:grid-cols-4">
                {projects[8].stack.map((item, index) => {
                  return (
                    <li className="text-sm text-accent" key={index}>
                      {item.name}
                      {index !== projects[8].stack.length - 1 && ", "}
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
                      href={projects[8].live}
                      target="_blank"
                      className="w-full h-full text-center text-xs my-auto items-center flex text-accent font-extralight"
                    >
                      Launch project
                    </Link>
                  </motion.div>
                </span>

                <CircleAnimation
                  data={projects[8].github1}
                  caption="• • • • • • FE Repo • • • • •"
                />

                {projects[8].github2 && (
                  <CircleAnimation
                    data={projects[8].github2}
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
                      src={projects[8].image}
                      fill
                      alt=""
                      className="object-contain p-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 09 movies store */}
        <motion.div
          variants={leftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative group flex flex-col xl:flex-row xl:gap-[30px] bg-[#27272c] rounded-4xl my-6 items-center"
        >
          <motion.div
            onClick={() => setSelectedProject(projects[9])}
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
                {projects[9].num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {projects[9].category} project
              </h2>

              <p className="text-white/60">{projects[9].description}</p>

              <ul className="gap-3 grid grid-cols-2 lg:grid-cols-4">
                {projects[9].stack.map((item, index) => {
                  return (
                    <li className="text-sm text-accent" key={index}>
                      {item.name}
                      {index !== projects[9].stack.length - 1 && ", "}
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
                      href={projects[9].live}
                      target="_blank"
                      className="w-full h-full text-center text-xs my-auto items-center flex text-accent font-extralight"
                    >
                      Launch project
                    </Link>
                  </motion.div>
                </span>

                <CircleAnimation
                  data={projects[9].github1}
                  caption="• • • • • • FE Repo • • • • •"
                />

                {projects[9].github2 && (
                  <CircleAnimation
                    data={projects[9].github2}
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
                      src={projects[9].image}
                      fill
                      alt=""
                      className="object-contain p-6"
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
