"use client";

import Countup from "react-countup";

const stats = [
  { num: 3, text: "Years of experience" },
  { num: 3, text: "Technologies mastered" },
  { num: 5, text: "Projects" },
  { num: 500, text: "Code commits" },
];
const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 flex-1 xl:justify-start items-center justify-center"
            >
              <Countup
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />

              <p className="leading-snug text-white/80">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
