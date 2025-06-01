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

  const construction = projects[0];
  const coffee_shop = projects[2];
  const ecommerce_admin_store = projects[10];
  const ecommerce_client_store = projects[11];
  const rida_portfolio = projects[5];
  const blog_system = projects[1];
  const smokers_vibes = projects[8];
  const admin_dashboard = projects[6];
  const animation_sliders = projects[7];
  const movies_store = projects[9];
  const scrolling_animation = projects[4];
  const e_commerce = projects[3];

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
        <ul className="flex flex-row justify-around items-center mx-auto text-sm md:text-md font-thin">
          <li className="space-x-2 bg-accent/10 text-accent p-2 rounded-full text-sm border border-accent/30 hover:border-accent/70">
            <span className="text-white/80">Total Projects:</span>
            <span className="text-md font-extrabold">12</span>
          </li>

          <li className="space-x-2 bg-accent/10 text-accent p-2 rounded-full text-sm border border-accent/30 hover:border-accent/70">
            <span className="text-white/80">Frontend:</span>
            <span className="text-md font-extrabold">7</span>
          </li>

          <li className="space-x-2 bg-accent/10 text-accent p-2 rounded-full text-sm border border-accent/30 hover:border-accent/70">
            <span className="text-white/80">Fullstack:</span>
            <span className="text-md font-extrabold">5</span>
          </li>
        </ul>

        {/* Construction */}
        <motion.div
          variants={leftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative group flex flex-col xl:flex-row xl:gap-[30px] bg-[#27272c] rounded-4xl my-6 items-center"
        >
          <motion.div
            onClick={() => setSelectedProject(construction)}
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
                {construction.index}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {construction.category} project
              </h2>

              <p className="text-white/60">{construction.description}</p>

              <ul className="gap-3 grid grid-cols-2 lg:grid-cols-4">
                {construction.stack.map((item, index) => {
                  return (
                    <li className="text-sm text-accent" key={index}>
                      {item.name}
                      {index !== construction.stack.length - 1 && ", "}
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
                      href={construction.live}
                      target="_blank"
                      className="w-full h-full text-center text-xs my-auto items-center flex text-accent font-extralight"
                    >
                      Launch project
                    </Link>
                  </motion.div>
                </span>

                <CircleAnimation
                  data={construction.github1}
                  caption="• • • • • • FE Repo • • • • •"
                />

                {construction.github2 && (
                  <CircleAnimation
                    data={construction.github2}
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
                      src={construction.image}
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

        {/* Coffee shop */}
        <motion.div
          variants={rightToLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative group flex flex-col xl:flex-row xl:gap-[30px] bg-[#27272c] rounded-4xl my-6 items-center"
        >
          <motion.div
            onClick={() => setSelectedProject(coffee_shop)}
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
                {coffee_shop.index}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {coffee_shop.category} project
              </h2>

              <p className="text-white/60">{coffee_shop.description}</p>

              <ul className="gap-3 grid grid-cols-2 lg:grid-cols-4">
                {coffee_shop.stack.map((item, index) => {
                  return (
                    <li className="text-sm text-accent" key={index}>
                      {item.name}
                      {index !== coffee_shop.stack.length - 1 && ", "}
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
                      href={coffee_shop.live}
                      target="_blank"
                      className="w-full h-full text-center text-xs my-auto items-center flex text-accent font-extralight"
                    >
                      Launch project
                    </Link>
                  </motion.div>
                </span>

                <CircleAnimation
                  data={coffee_shop.github1}
                  caption="• • • • • • FE Repo • • • • •"
                />

                {coffee_shop.github2 && (
                  <CircleAnimation
                    data={coffee_shop.github2}
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
                      src={coffee_shop.image}
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

        {/* E-Commerce admin store */}
        <motion.div
          variants={leftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative group flex flex-col xl:flex-row xl:gap-[30px] bg-[#27272c] rounded-4xl my-6 items-center"
        >
          <motion.div
            onClick={() => setSelectedProject(ecommerce_admin_store)}
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
                {ecommerce_admin_store.index}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {ecommerce_admin_store.category} project
              </h2>

              <p className="text-white/60">
                {ecommerce_admin_store.description}
              </p>

              <ul className="gap-3 grid grid-cols-2 lg:grid-cols-4">
                {ecommerce_admin_store.stack.map((item, index) => {
                  return (
                    <li className="text-sm text-accent" key={index}>
                      {item.name}
                      {index !== ecommerce_admin_store.stack.length - 1 && ", "}
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
                      href={ecommerce_admin_store.live}
                      target="_blank"
                      className="w-full h-full text-center text-xs my-auto items-center flex text-accent font-extralight"
                    >
                      Launch project
                    </Link>
                  </motion.div>
                </span>

                <CircleAnimation
                  data={ecommerce_admin_store.github1}
                  caption="• • • • • • FE Repo • • • • •"
                />

                {ecommerce_admin_store.github2 && (
                  <CircleAnimation
                    data={ecommerce_admin_store.github2}
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
                      src={ecommerce_admin_store.image}
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

        {/* E-Commerce client store */}
        <motion.div
          variants={rightToLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative group flex flex-col xl:flex-row xl:gap-[30px] bg-[#27272c] rounded-4xl my-6 items-center"
        >
          <motion.div
            onClick={() => setSelectedProject(ecommerce_client_store)}
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
                {ecommerce_client_store.index}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {ecommerce_client_store.category} project
              </h2>

              <p className="text-white/60">
                {ecommerce_client_store.description}
              </p>

              <ul className="gap-3 grid grid-cols-2 lg:grid-cols-4">
                {ecommerce_client_store.stack.map((item, index) => {
                  return (
                    <li className="text-sm text-accent" key={index}>
                      {item.name}
                      {index !== ecommerce_client_store.stack.length - 1 &&
                        ", "}
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
                      href={ecommerce_client_store.live}
                      target="_blank"
                      className="w-full h-full text-center text-xs my-auto items-center flex text-accent font-extralight"
                    >
                      Launch project
                    </Link>
                  </motion.div>
                </span>

                <CircleAnimation
                  data={ecommerce_client_store.github1}
                  caption="• • • • • • FE Repo • • • • •"
                />

                {ecommerce_client_store.github2 && (
                  <CircleAnimation
                    data={ecommerce_client_store.github2}
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
                      src={ecommerce_client_store.image}
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

        {/* Rida Portfolio */}
        <motion.div
          variants={leftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative group flex flex-col xl:flex-row xl:gap-[30px] bg-[#27272c] rounded-4xl my-6 items-center"
        >
          <motion.div
            onClick={() => setSelectedProject(rida_portfolio)}
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
                {rida_portfolio.index}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {rida_portfolio.category} project
              </h2>

              <p className="text-white/60">{rida_portfolio.description}</p>

              <ul className="gap-3 grid grid-cols-2 lg:grid-cols-4">
                {rida_portfolio.stack.map((item, index) => {
                  return (
                    <li className="text-sm text-accent" key={index}>
                      {item.name}
                      {index !== rida_portfolio.stack.length - 1 && ", "}
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
                      href={rida_portfolio.live}
                      target="_blank"
                      className="w-full h-full text-center text-xs my-auto items-center flex text-accent font-extralight"
                    >
                      Launch project
                    </Link>
                  </motion.div>
                </span>

                <CircleAnimation
                  data={rida_portfolio.github1}
                  caption="• • • • • • FE Repo • • • • •"
                />

                {rida_portfolio.github2 && (
                  <CircleAnimation
                    data={rida_portfolio.github2}
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
                      src={rida_portfolio.image}
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

        {/* Blog system */}
        <motion.div
          variants={rightToLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative group flex flex-col xl:flex-row xl:gap-[30px] bg-[#27272c] rounded-4xl my-6 items-center"
        >
          <motion.div
            onClick={() => setSelectedProject(blog_system)}
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
                {blog_system.index}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {blog_system.category} project
              </h2>

              <p className="text-white/60">{blog_system.description}</p>

              <ul className="gap-3 grid grid-cols-2 lg:grid-cols-4">
                {blog_system.stack.map((item, index) => {
                  return (
                    <li className="text-sm text-accent" key={index}>
                      {item.name}
                      {index !== blog_system.stack.length - 1 && ", "}
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
                      href={blog_system.live}
                      target="_blank"
                      className="w-full h-full text-center text-xs my-auto items-center flex text-accent font-extralight"
                    >
                      Launch project
                    </Link>
                  </motion.div>
                </span>

                <CircleAnimation
                  data={blog_system.github1}
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
                      src={blog_system.image}
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

        {/* smokers vibes */}
        <motion.div
          variants={leftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative group flex flex-col xl:flex-row xl:gap-[30px] bg-[#27272c] rounded-4xl my-6 items-center"
        >
          <motion.div
            onClick={() => setSelectedProject(smokers_vibes)}
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
                {smokers_vibes.index}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {smokers_vibes.category} project
              </h2>

              <p className="text-white/60">{smokers_vibes.description}</p>

              <ul className="gap-3 grid grid-cols-2 lg:grid-cols-4">
                {smokers_vibes.stack.map((item, index) => {
                  return (
                    <li className="text-sm text-accent" key={index}>
                      {item.name}
                      {index !== smokers_vibes.stack.length - 1 && ", "}
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
                      href={smokers_vibes.live}
                      target="_blank"
                      className="w-full h-full text-center text-xs my-auto items-center flex text-accent font-extralight"
                    >
                      Launch project
                    </Link>
                  </motion.div>
                </span>

                <CircleAnimation
                  data={smokers_vibes.github1}
                  caption="• • • • • • FE Repo • • • • •"
                />

                {smokers_vibes.github2 && (
                  <CircleAnimation
                    data={smokers_vibes.github2}
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
                      src={smokers_vibes.image}
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

        {/* Admin dashboard */}
        <motion.div
          variants={rightToLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative group flex flex-col xl:flex-row xl:gap-[30px] bg-[#27272c] rounded-4xl my-6 items-center"
        >
          <motion.div
            onClick={() => setSelectedProject(admin_dashboard)}
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
                {admin_dashboard.index}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {admin_dashboard.category} project
              </h2>

              <p className="text-white/60">{admin_dashboard.description}</p>

              <ul className="gap-3 grid grid-cols-2 lg:grid-cols-4">
                {admin_dashboard.stack.map((item, index) => {
                  return (
                    <li className="text-sm text-accent" key={index}>
                      {item.name}
                      {index !== admin_dashboard.stack.length - 1 && ", "}
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
                      href={admin_dashboard.live}
                      target="_blank"
                      className="w-full h-full text-center text-xs my-auto items-center flex text-accent font-extralight"
                    >
                      Launch project
                    </Link>
                  </motion.div>
                </span>

                <CircleAnimation
                  data={admin_dashboard.github1}
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
                      src={admin_dashboard.image}
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

        {/* Animation sliders */}
        <motion.div
          variants={leftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative group flex flex-col xl:flex-row xl:gap-[30px] bg-[#27272c] rounded-4xl my-6 items-center"
        >
          <motion.div
            onClick={() => setSelectedProject(animation_sliders)}
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
                {animation_sliders.index}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {animation_sliders.category} project
              </h2>

              <p className="text-white/60">{animation_sliders.description}</p>

              <ul className="gap-3 grid grid-cols-2 lg:grid-cols-4">
                {animation_sliders.stack.map((item, index) => {
                  return (
                    <li className="text-sm text-accent" key={index}>
                      {item.name}
                      {index !== animation_sliders.stack.length - 1 && ", "}
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
                      href={animation_sliders.live}
                      target="_blank"
                      className="w-full h-full text-center text-xs my-auto items-center flex text-accent font-extralight"
                    >
                      Launch project
                    </Link>
                  </motion.div>
                </span>

                <CircleAnimation
                  data={animation_sliders.github1}
                  caption="• • • • • • FE Repo • • • • •"
                />

                {animation_sliders.github2 && (
                  <CircleAnimation
                    data={animation_sliders.github2}
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
                      src={animation_sliders.image}
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

        {/* movies store */}
        <motion.div
          variants={rightToLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative group flex flex-col xl:flex-row xl:gap-[30px] bg-[#27272c] rounded-4xl my-6 items-center"
        >
          <motion.div
            onClick={() => setSelectedProject(movies_store)}
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
                {movies_store.index}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {movies_store.category} project
              </h2>

              <p className="text-white/60">{movies_store.description}</p>

              <ul className="gap-3 grid grid-cols-2 lg:grid-cols-4">
                {movies_store.stack.map((item, index) => {
                  return (
                    <li className="text-sm text-accent" key={index}>
                      {item.name}
                      {index !== movies_store.stack.length - 1 && ", "}
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
                      href={movies_store.live}
                      target="_blank"
                      className="w-full h-full text-center text-xs my-auto items-center flex text-accent font-extralight"
                    >
                      Launch project
                    </Link>
                  </motion.div>
                </span>

                <CircleAnimation
                  data={movies_store.github1}
                  caption="• • • • • • FE Repo • • • • •"
                />

                {movies_store.github2 && (
                  <CircleAnimation
                    data={movies_store.github2}
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
                      src={movies_store.image}
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

        {/* Scrolling animation*/}
        <motion.div
          variants={leftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative group flex flex-col xl:flex-row xl:gap-[30px] bg-[#27272c] rounded-4xl my-6 items-center"
        >
          <motion.div
            onClick={() => setSelectedProject(scrolling_animation)}
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
                {scrolling_animation.index}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {scrolling_animation.category} project
              </h2>

              <p className="text-white/60">{scrolling_animation.description}</p>

              <ul className="gap-3 grid grid-cols-2 lg:grid-cols-4">
                {scrolling_animation.stack.map((item, index) => {
                  return (
                    <li className="text-sm text-accent" key={index}>
                      {item.name}
                      {index !== scrolling_animation.stack.length - 1 && ", "}
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
                      href={scrolling_animation.live}
                      target="_blank"
                      className="w-full h-full text-center text-xs my-auto items-center flex text-accent font-extralight"
                    >
                      Launch project
                    </Link>
                  </motion.div>
                </span>

                <CircleAnimation
                  data={scrolling_animation.github1}
                  caption="• • • • • • FE Repo • • • • •"
                />

                {scrolling_animation.github2 && (
                  <CircleAnimation
                    data={scrolling_animation.github2}
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
                      src={scrolling_animation.image}
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

        {/* E-commerce */}
        <div className="overflow-hidden">
          <motion.div
            variants={rightToLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="relative group flex flex-col xl:flex-row xl:gap-[30px] bg-[#27272c] rounded-4xl my-6 items-center"
          >
            <motion.div
              onClick={() => setSelectedProject(e_commerce)}
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
                  {e_commerce.index}
                </div>

                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {e_commerce.category} project
                </h2>

                <p className="text-white/60">{e_commerce.description}</p>

                <ul className="gap-3 grid grid-cols-2 lg:grid-cols-4">
                  {e_commerce.stack.map((item, index) => {
                    return (
                      <li className="text-sm text-accent" key={index}>
                        {item.name}
                        {index !== e_commerce.stack.length - 1 && ", "}
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
                    data={e_commerce.github1}
                    caption="• • • • • • FE Repo • • • • •"
                  />

                  {e_commerce.github2 && (
                    <CircleAnimation
                      data={e_commerce.github2}
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
                        src={e_commerce.image}
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
      </div>
    </motion.section>
  );
};

export default Work;
