"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

const ICONS = [
  { src: "/assets/icons/nextjs.svg", alt: "Next.js" },
  { src: "/assets/icons/laravel.svg", alt: "Laravel" },
  { src: "/assets/icons/sharepoint.svg", alt: "SharePoint" },
  { src: "/assets/icons/php.svg", alt: "PHP" },
  { src: "/assets/icons/js.svg", alt: "JavaScript" },
  { src: "/assets/icons/react.svg", alt: "React" },
  { src: "/assets/icons/tailwind.svg", alt: "Tailwind CSS" },
  { src: "/assets/icons/figma.svg", alt: "Figma" },
  { src: "/assets/icons/mysql.svg", alt: "MySQL" },
];

const Photo = () => {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, delay: 2, ease: "easeIn" },
        }}
        className="relative w-[310px] h-[310px] xl:w-[630px] xl:h-[630px] dark:w-[298px] dark:h-[298px] dark:xl:w-[498px] dark:xl:h-[498px]"
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

      {/* Orbiting Icons (responsive radius) */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Mobile orbit */}
        <div className="block xl:hidden">
          <OrbitingCircles iconSize={32} radius={135} centerOffsetY={-10}>
            {ICONS.map((icon, idx) => (
              <Image
                key={idx}
                src={icon.src}
                alt={icon.alt}
                width={32}
                height={32}
              />
            ))}
          </OrbitingCircles>
        </div>

        {/* Desktop orbit */}
        <div className="hidden xl:block">
          <OrbitingCircles iconSize={40} radius={215} centerOffsetY={-20}>
            {ICONS.map((icon, idx) => (
              <Image
                key={idx}
                src={icon.src}
                alt={icon.alt}
                width={40}
                height={40}
              />
            ))}
          </OrbitingCircles>
        </div>
      </div>
    </div>
  );
};

export default Photo;
