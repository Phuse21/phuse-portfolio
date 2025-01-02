"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, delay: 2, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 2.4, ease: "easeInOut" },
          }}
          className="w-[310px] h-[370px] -bottom-6 xl:w-[630px] xl:h-[630px] dark:w-[298px] dark:h-[298px] dark:xl:w-[498px] dark:xl:h-[498px] dark:mix-blend-lighten mix-blend-normal absolute dark:left-1 dark:bottom-0 xl:-left-14 xl:-bottom-10"
        >
          {/* Light Mode Image */}
          <Image
            src="/assets/light.png"
            alt="profile-light"
            priority
            quality={100}
            fill
            className="object-contain dark:hidden"
          />

          {/* Dark Mode Image */}
          <Image
            src="/assets/dark.png"
            alt="profile-dark"
            priority
            quality={100}
            fill
            className="object-contain hidden dark:block"
          />
        </motion.div>

        {/* circle */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#008080"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
              transition: {
                duration: 20,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
