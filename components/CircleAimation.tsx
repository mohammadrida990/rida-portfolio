import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";

type Props = {
  data: string;
  caption: string;
};

const CircleAnimation = ({ data, caption }: Props) => {
  return (
    <Link href={data} target="_blank">
      <div className="h-[72px] w-[72px] bg-white/5 rounded-full flex justify-center items-center">
        <div className="relative h-[100px] w-[100px] flex justify-center items-center">
          {/* Animated curved text */}
          <svg
            viewBox="0 0 100 100"
            className="absolute top-0 left-0 w-full h-full animate-spin-curved pointer-events-none"
          >
            <defs>
              <path
                id="circlePath"
                d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
              />
            </defs>

            <text fill="#03ff99" letterSpacing="1" textAnchor="middle">
              <textPath href="#circlePath" startOffset="50%" className="text-">
                {caption} • {caption} • {caption} •
              </textPath>
            </text>
          </svg>

          <BsGithub className="text-white text-3xl hover:text-accent" />
        </div>
      </div>
    </Link>
  );
};

export default CircleAnimation;
