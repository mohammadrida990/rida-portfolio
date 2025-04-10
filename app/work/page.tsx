"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Swiper as SwiperType } from "swiper";
import WorkSliderBtns from "@/components/WorkSlierBtns";

const projects = [
  {
    num: "01",
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
  {
    num: "02",
    name: "E-commerce",
    category: "fullstack",
    description: "Small ecommerce project to buy products online",
    stack: [
      { name: "Next.js" },
      { name: "Nest.js" },
      { name: "Tailwind CSS" },
      { name: "Shadncn-ui" },
      { name: "PostgreSQL" },
    ],
    image: "/assets/eccomerce.png",
    live: "",
    github1: "https://github.com/mohammadrida990/eccomerce_frontend",
    github2: "https://github.com/mohammadrida990/ecommerce-backend",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
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
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full order-2 xl:order-none xl:justify-between xl:w-[50%] xl:h-[460px] flex flex-col">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl font-extrabold text-outline-white leading-none text-transparent">
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>

              <p className="text-white/60">{project.description}</p>

              <ul className="gap-4 grid grid-cols-2 xl:grid-cols-3">
                {project.stack.map((item, index) => {
                  return (
                    <li className="text-sm text-accent" key={index}>
                      {item.name}
                      {index !== project.stack.length - 1 && ", "}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20" />

              <div className="flex items-center gap-4">
                <span>
                  <div className="h-[72px] w-[72px] flex justify-center items-center">
                    <BsArrowUpRight className="text-white text-3xl hover:text-accent" />
                  </div>
                </span>

                <Link href={project.github1}>
                  <div className="h-[72px] w-[72px] bg flex justify-center items-center bg-white/5 rounded-full">
                    <BsGithub className="text-white text-3xl hover:text-accent" />
                  </div>
                </Link>

                {project.github2 && (
                  <Link href={project.github2}>
                    <div className="h-[72px] w-[72px] bg flex justify-center items-center bg-white/5 rounded-full">
                      <BsGithub className="text-white text-3xl hover:text-accent" />
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12"
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full z-10 bg-black/10" />

                      <div className="w-full h-full relative">
                        <Image
                          src={item.image}
                          fill
                          alt=""
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <WorkSliderBtns
                containerStyles="
                  absolute right-0 xl:bottom-0 z-20 w-full justify-between
                  flex xl:w-max xl:justify-none bottom-[calc(50%_-_22px)] gap-2
                "
                btnStyles="
                  bg-accent hover:bg-accent/30  text-primary flex justify-center
                  items-center text-[22px] w-[44px] h-[44px] transition-all
                "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
