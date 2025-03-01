"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Suwari Legal LLP",
    description:
      "Suwari Legal LLP is a professional frontend project designed for a law firm, providing a clean and intuitive platform to showcase legal services, expertise, and client-focused solutions.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "Framer Motion" },
    ],
    image: "/assets/mockup/suwari.png",
    live: "https://suwarillp.vercel.app/",
    github: "https://github.com/Phuse21/suwarillp/",
  },
  {
    num: "02",
    category: "Frontend",
    title: "LuxeGlam",
    description:
      "LuxeGlam is a frontend project focused on beauty and cosmetic treatments, offering a sleek and user-friendly platform to explore and book premium beauty services.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "Framer Motion" },
    ],
    image: "/assets/mockup/glam.png",
    live: "https://luxe-glam.vercel.app/",
    github: "https://github.com/Phuse21/LuxeGlam",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "Solestride",
    description:
      "Solestride is job a platform where employers can post job opportunities, and the general public can search and apply for jobs seamlessly, connecting talent with opportunities.",
    stack: [
      { name: "Laravel" },
      { name: "Tailwind.css" },
      { name: "Livewire" },
      { name: "Alpine.js" },
      { name: "MySQL" },
    ],
    image: "/assets/mockup/solestride.png",
    live: "",
    github: "https://github.com/Phuse21/SoleStride",
  },
  {
    num: "04",
    category: "Fullstack",
    title: "Care Pulse",
    description:
      "Care Pulse is a hospital appointment booking platform designed to streamline scheduling for patients and doctors, ensuring a seamless and efficient healthcare experience.",
    stack: [
      { name: "Next.js" },
      { name: "Laravel" },
      { name: "Tailwind.css" },
      { name: "MySQL" },
    ],
    image: "/assets/mockup/carepulse.png",
    live: "",
    github: "https://github.com/Phuse21/CarePulse",
  },
  {
    num: "05",
    category: "Backend",
    title: "Robocall App",
    description:
      "A robust robocall application built with Arkesel, enabling automated voice calls for efficient communication and notifications. Ideal for businesses and organizations looking to streamline outreach.",
    stack: [{ name: "Laravel" }, { name: "API" }],
    image: "/assets/mockup/robocall.png",
    github: "https://github.com/Phuse21/RobocallsApp",
  },

  {
    num: "06",
    category: "UI/UX",
    title: "EMR UI/UX",
    description:
      "A thoughtfully designed user interface and experience for an EMR system, focusing on intuitive navigation, streamlined workflows, and enhanced usability for healthcare professionals.",
    stack: [{ name: "Figma" }],
    image: "/assets/mockup/Emr.png",
    figma:
      "https://www.figma.com/design/Ml1ZrLoIg5Mh6H1GqOGLIj/sample?m=auto&t=egb9UqawUn21l3gF-6",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const index = swiper.activeIndex;
    setProject(projects[index]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-6xl leading-none font-extrabold text-outline text-transparent">
                {/* outline number */}
                {project.num}
              </div>

              <h2 className="text-[42px] leading-none font-bold text-white group:hover:text-accent transition-all duration-500 capitalize">
                {/* project category */}
                {project.title}
              </h2>

              <h3 className="text-[22px] leading-none font-semibold text-white/80 group:hover:text-accent transition-all duration-500 capitalize">
                {/* project category */}
                {project.category} Project
              </h3>

              <p className="text-white/60">
                {/* project description */}
                {project.description}
              </p>

              {/* stack */}
              <ul className="flex gap-4 flex-wrap ma-w-[90%]">
                {project.stack.map((stack, index) => {
                  return (
                    <li key={index} className="text-accent text-xl">
                      {stack.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border dark:border-[#ffffff]/20 border-[#1c1c22]/50"></div>

              {/* buttons */}

              <div className="flex gap-4 items-center">
                {/* Live Project Button */}
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                        </TooltipTrigger>

                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {/* GitHub Repository Button */}
                {project.github && (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-3xl text-white group-hover:text-accent" />
                        </TooltipTrigger>

                        <TooltipContent>
                          <p>GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {/* Figma Project Button */}
                {project.figma && (
                  <Link href={project.figma}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <FaFigma className="text-3xl text-white group-hover:text-accent" />
                        </TooltipTrigger>

                        <TooltipContent>
                          <p>Figma Design</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* slider */}
          <div className="w-full xl:w-[50%]">
            {/* Keyboard navigation info */}
            <p className="text-sm text-accent mb-2">
              Can use the arrow keys on your keyboard to navigate the slides.
            </p>

            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="x:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="lg:h-[460px] h-[260px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* slider buttons */}
              <div className="relative h-[40px] xl:h-[60px]">
                <WorkSliderBtns
                  containerStyles="absolute right-0 bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none flex gap-2"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary xl:text-[22px] text-[20px] xl:w-[44px] xl:h-[44px] w-[32px] h-[32px] flex justify-center items-center transition-all"
                />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
