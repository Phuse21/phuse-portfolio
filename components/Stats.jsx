"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 3,
    text: "Years of Experience",
  },
  {
    num: 6,
    text: "Projects",
  },
  {
    num: 6,
    text: "Technologies Mastered",
  },
  {
    num: 400,
    text: "Code Commits",
    isApproximate: true,
  },
];

const Stats = () => {
  return (
    <section className="pt4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                className="flex flex-1 gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <div>
                  <CountUp
                    end={stat.num}
                    duration={5}
                    delay={2}
                    className="text-3xl xl:text-6xl font-extrabold"
                  />
                  {stat.isApproximate && (
                    <span className="text-3xl xl:text-6xl font-extrabold">
                      +
                    </span>
                  )}
                </div>
                <p
                  className={`${
                    stat.text.length > 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
