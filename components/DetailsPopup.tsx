import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Project } from "@/app/work/page";
import { IoMdCloseCircleOutline } from "react-icons/io";

type Props = {
  selectedProject: Project | null;
  setSelectedProject: (p: Project | null) => void;
};

const DetailsPopup = ({ selectedProject, setSelectedProject }: Props) => {
  return (
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 40,
              rotateX: -90,
            }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40, rotateX: -90 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 30,
            }}
            className="relative w-full max-w-5xl bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-8 overflow-y-auto max-h-[90vh] text-white"
          >
            <button
              className="absolute top-4 right-4 text-accent/70 hover:text-accent transition text-2xl cursor-pointer"
              onClick={() => setSelectedProject(null)}
            >
              <IoMdCloseCircleOutline />
            </button>

            <h2 className="text-4xl font-bold mb-3 capitalize">
              {selectedProject.category} project
            </h2>
            <p className="text-white/70 mb-6">{selectedProject.description}</p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3.7, ease: "easeOut" }}
              className="relative w-full min-h-[400px] xl:min-h-[500px] h-[300px] rounded-xl overflow-hidden"
            >
              <Image
                src={selectedProject.image}
                alt={selectedProject.name}
                fill
                className="object-contain p-6"
              />
            </motion.div>

            <div className="text-center">
              <p className="text-white/70 mb-3 font-extralight mx-auto inline-block border-b border-accent/40">
                Summery of Packages, libraries, frameworks and tools that used
                in these project:
              </p>
            </div>

            <p className="text-sm text-white/70 mb-3 font-extralight">
              Frontend tools:
            </p>
            <ul className="flex flex-wrap gap-3 mb-4">
              {selectedProject.fe.map((item, i) => (
                <li
                  key={i}
                  className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm border border-accent/30 hover:border-accent/70"
                >
                  {item.name}
                </li>
              ))}
            </ul>

            {selectedProject.be && (
              <>
                <p className="text-sm text-white/70 mb-3 font-extralight">
                  Backend tools:
                </p>
                <ul className="flex flex-wrap gap-3 mb-4">
                  {selectedProject.be.map((item, i) => (
                    <li
                      key={i}
                      className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm border border-accent/30 hover:border-accent/70"
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <p className="text-sm text-white/70 mb-3 font-extralight">
              Additional tools:
            </p>
            <ul className="flex flex-wrap gap-3 mb-4">
              {selectedProject.others.map((item, i) => (
                <li
                  key={i}
                  className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm border border-accent/30 hover:border-accent/70"
                >
                  {item.name}
                </li>
              ))}
            </ul>

            <div className="flex gap-6 mt-6 pt-3 items-center justify-center border-t-4 border-white/40 rounded-2xl md:text-sm text-xs">
              <Link
                href={selectedProject.github1}
                target="_blank"
                className="text-accent underline text-center  hover:text-accent/80"
              >
                View GitHub Repo
              </Link>

              {selectedProject.github2 && (
                <Link
                  href={selectedProject.github2}
                  target="_blank"
                  className="text-accent underline text-center  hover:text-accent/80"
                >
                  View GitHub Repo (BE)
                </Link>
              )}

              <Link
                href={selectedProject.live}
                target="_blank"
                className="bg-accent text-black px-6 py-2 text-center rounded-full hover:bg-accent/80 transition"
              >
                Launch Project
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DetailsPopup;
