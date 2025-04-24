"use client";

import Countup from "react-countup";

const stats = [
  { num: 3, text: "Years of experience", id: 1 },
  { num: 4, text: "Framework mastered", id: 2 },
  { num: 5, text: "Projects", id: 3 },
  { num: 999, text: "Code commits", id: 4 },
];
const Stats = () => {
  return (
    <section>
      <div className="container mx-auto mb-3">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none flex-col sm:flex-row">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 flex-1 xl:justify-start items-center justify-center"
            >
              <Countup
                end={item.num}
                duration={5}
                delay={3}
                suffix={[1, 4].includes(item.id) ? "+" : undefined}
                enableScrollSpy
                scrollSpyOnce
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
