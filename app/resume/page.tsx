"use client";

import { FaReact, FaCss3 } from "react-icons/fa";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IoLogoJavascript, IoLogoGithub } from "react-icons/io";
import { FaHtml5, FaGit } from "react-icons/fa";
import { RiNextjsFill, RiVuejsFill } from "react-icons/ri";
import {
  SiNestjs,
  SiVuetify,
  SiRedux,
  SiShadcnui,
  SiAxios,
  SiTypescript,
  SiTailwindcss,
  SiReacthookform,
  SiPrimereact,
  SiPrimevue,
  SiGraphql,
  SiZod,
  SiPrisma,
} from "react-icons/si";
import { BsGitlab } from "react-icons/bs";

const about = {
  title: "About me",
  description: "Frontend Web Developer",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Mohammad Rida",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+961)71 163 995",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Lebanese",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Arabic",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "A snapshot of the frameworks, packages, languages, libraries, and tools I use to build fast, responsive, and accessible web applications..",
  skillLists: [
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3 />,
    },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript />,
    },
    {
      name: "Typescript",
      icon: <SiTypescript />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Next.js",
      icon: <RiNextjsFill />,
    },
    {
      name: "Nest js",
      icon: <SiNestjs />,
    },
    {
      name: "GraphQl",
      icon: <SiGraphql />,
    },
    {
      name: "Vue",
      icon: <RiVuejsFill />,
    },
    {
      name: "Vuetify",
      icon: <SiVuetify />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Shadcn UI",
      icon: <SiShadcnui />,
    },
    {
      name: "Prime react",
      icon: <SiPrimereact />,
    },
    {
      name: "Prime vue",
      icon: <SiPrimevue />,
    },
    {
      name: "React hook form",
      icon: <SiReacthookform />,
    },
    {
      name: "Redux",
      icon: <SiRedux />,
    },
    {
      name: "Axios",
      icon: <SiAxios />,
    },
    {
      name: "Zod",
      icon: <SiZod />,
    },
    {
      name: "Prisma",
      icon: <SiPrisma />,
    },
    {
      name: "Git",
      icon: <FaGit />,
    },
    {
      name: "Github",
      icon: <IoLogoGithub />,
    },
    {
      name: "Gitlab",
      icon: <BsGitlab />,
    },
  ],
};

const education = {
  title: "My Education",
  description:
    "A brief look at my academic background and where I built my foundation in tech.",
  items: [
    {
      institution: "Bir Hassan Technical College - University",
      degree: "Bachelor of Science in Management Information System",
      location: "Beirut",
      description: "Graduated with honors.",
    },
  ],
};

const certifications = {
  title: "My Certifications",
  description:
    "Verified certifications that complement my practical experience.",
  items: [
    {
      name: "MEAN Stack",
      institution: "IT-GRAMMAR training center",
      location: "Beirut",
      duration: "2021",
    },
    {
      name: "Cisco Certified Network Associate (CCNA I)",
      institution: "Tanmiya Institute Center",
      location: "Beirut",
      duration: "2021",
    },
  ],
};

const experience = {
  title: "My Experience",
  description:
    "Hands-on experience contributing to scalable, user-focused web applications.",
  items: [
    {
      company: "Anywr-group",
      location: "France (Remotely)",
      position: "Frontend Developer",
      duration: "Dec 2021 - Present",
      description: [
        "Followed agile development methodologies and participated in sprint planning, daily stand-ups, and code reviews",
        "Led the development of reusable components within a design system, promoting consistency and scalability across multiple projects",
        "Improved site performance by 30% by refactoring legacy code",
        "Collaborated with backend developers to ensure seamless API consumption and data flow",
        "Ensured cross-browser compatibility and mobile responsiveness for 100% of users",
        "Collaborated with cross-functional teams (UX/UI designers, backend developers) to implement shared components that aligned with the design guidelines and improved development efficiency by 25%",
      ],
    },
  ],
};
import { JSX } from "react";
import { useScrollInView } from "@/components/ScrollInView";

const SkillItem = ({
  skill,
  index,
}: {
  skill: Record<string, string | JSX.Element>;
  index: number;
}) => {
  const { ref, isInView } = useScrollInView();

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true, amount: 0.05 }}
    >
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger className="h-[150px] rounded-xl bg-[#232329] w-full flex group justify-center items-center relative">
            <div className="text-6xl transition-all duration-300 group-hover:text-accent">
              {skill.icon}
            </div>

            <motion.div
              className="absolute"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 50 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <p className="capitalize text-white p-2">{skill.name}</p>
            </motion.div>
          </TooltipTrigger>

          <TooltipContent>
            <p className="capitalize bg-white text-primary p-2 text-sm">
              {skill.name}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.li>
  );
};

const ResumePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto mt-4">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] xl:mx-0 gap-6 mx-auto">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          <div className="w-full min-h-[90vh]">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>

                <p className="text-white/60 mx-auto xl:mx-0 max-w-[600px]">
                  {experience.description}
                </p>

                <ScrollArea className="h-full">
                  <ul className="grid gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-full py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>

                        <h3 className="text-xl text-center lg:text-left mx-w-[260px] min-h-[60px]">
                          {item.position}
                        </h3>

                        <div className="flex items-center gap-2">
                          <span className="rounded-full w-[6px] h-[6px] bg-accent" />

                          <p className="text-white/60 underline decoration-accent underline-offset-8">
                            {item.company} - {item.location}
                          </p>
                        </div>

                        <div>
                          <ul className="text-white/80 text-sm ml-8 font-semibold">
                            {item.description.map((desc, index) => (
                              <li
                                key={index}
                                className="list-disc list-inside italic my-2"
                              >
                                {desc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>

                <p className="text-white/60 mx-auto xl:mx-0 max-w-[600px]">
                  {education.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px] xl:grid-cols-1">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[300px] md:h-[185px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.location}</span>

                        <h3 className="text-xl text-center mb-12 md:mb-6 lg:text-left mx-w-[260px] min-h-[60px]">
                          {item.degree}
                        </h3>

                        <div className="flex items-center gap-2">
                          <span className="rounded-full w-[6px] h-[6px] bg-accent" />

                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="certifications" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{certifications.title}</h3>

                <p className="text-white/60 mx-auto xl:mx-0 max-w-[600px]">
                  {certifications.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px] xl:grid-cols-2">
                    {certifications.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[185px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">
                          {item.location} - {item.duration}
                        </span>

                        <h3 className="text-xl text-center mb-6 lg:text-left mx-w-[260px] min-h-[60px]">
                          {item.name}
                        </h3>

                        <div className="flex items-center gap-2">
                          <span className="rounded-full w-[6px] h-[6px] bg-accent" />

                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>

                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 xl:gap-[30px] gap-4 sm:grid-cols-3 md:grid-cols-4">
                  {skills.skillLists.map((skill, index) => (
                    <SkillItem key={index} skill={skill} index={index} />
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>

                <p className="max-w-[600px] text-white/60 max-auto xl:mx-0">
                  {about.description}
                </p>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}:</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumePage;
