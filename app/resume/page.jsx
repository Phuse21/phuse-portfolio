"use client";

import { FaHtml5, FaCss3, FaJs, FaPhp, FaReact, FaFigma } from "react-icons/fa";

import { SiTailwindcss, SiLaravel, SiNextdotjs } from "react-icons/si";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

//about data
const about = {
  title: "About Me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae ",
  info: [
    {
      fieldName: "Name",
      value: "Mahfuz Abdallah",
    },
    {
      fieldName: "Phone",
      value: "+233(0) 559518248",
    },
    {
      fieldName: "Experience",
      value: "2 years",
    },
    {
      fieldName: "Email",
      value: "abdallahm4511@gmail.com",
    },
    {
      fieldName: "Languages",
      value: "English",
    },
    {
      fieldName: "Freelance",
      value: "Available",
    },
  ],
};

// professional experience
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Professional Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae ",

  items: [
    {
      company: "RX Health Info Systems",
      title: "Junior Developer",
      date: "2023 - 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae ",
    },

    {
      company: "Private Contractor",
      title: "Robocall Developer",
      date: "December 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae ",
    },

    {
      company: "Scancom PLC (MTN Ghana)",
      title: "Tech Support (Intern)",
      date: "October 2023 - December 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae ",
    },
  ],
};

// education
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae ",

  items: [
    {
      institution: "University of Ghana",
      degree: "Bsc Physics & Computer Science",
      date: "2019 - 2023",
    },

    {
      institution: "Free Code Camp",
      degree: "JavaScript Algorithms and Data Structures,",
      date: "November 2024 - December 2024",
    },
  ],
};

// skills
const skills = {
  title: "Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae ",

  skillsList: [
    {
      name: "Laravel",
      icon: <SiLaravel />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "PHP",
      icon: <FaPhp />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3 />,
    },

    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Figma",
      icon: <FaFigma />,
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">
              Professional Experience
            </TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              Experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
