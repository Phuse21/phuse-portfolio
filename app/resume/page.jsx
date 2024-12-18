"use client";

import { FaHtml5, FaCss3, FaJs, FaPhp, FaReact, FaFigma } from "react-icons/fa";

import { SiTailwindcss, SiLaravel, SiNextdotjs } from "react-icons/si";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

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
      date: "October 2023 - October 2024",
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
            {/* education */}
            <TabsContent value="education" className="w-full">
              Education
            </TabsContent>

            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.date}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.title}
                          </h3>

                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              Skills
            </TabsContent>
            {/* About Me */}
            <TabsContent value="about" className="w-full">
              About Me
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
