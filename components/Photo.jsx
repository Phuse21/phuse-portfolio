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
          <motion.rect
            x="28"
            y="28"
            width="450"
            height="450"
            stroke="#008080"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "20 30" }}
            animate={{
              strokeDasharray: ["10 40", "30 20", "50 10", "20 30"],
              strokeDashoffset: [0, -10, -20, 0],
              transition: {
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
