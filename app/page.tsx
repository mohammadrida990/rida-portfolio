import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-2xl text-accent">Frontend Web Developer</span>

            <h1 className="h1">
              Hello I&apos;m <br />
              <span className="text-accent">Mohammad Rida</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/90">
              I craft responsive, user-focused web applications using modern
              frontend technologies. With a strong foundation in HTML, CSS,
              JavaScript, and frameworks like React and Next.js, I bring
              interfaces to life through clean code, smooth animations, and
              thoughtful UX. Whether it&apos;s building from scratch or
              collaborating in cross-functional teams, I turn ideas into
              pixel-perfect digital experiences.
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
