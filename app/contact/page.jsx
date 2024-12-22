"use client";

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const info = [
  {
    title: "Phone",
    icon: <FaPhoneAlt />,
    description: "+233(0) 559518248",
  },
  {
    title: "Email",
    icon: <FaEnvelope />,
    description: "abdallahm4511@gmail.com",
  },
  {
    title: "Address",
    icon: <FaMapMarkerAlt />,
    description: "Accra, Ghana",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="py-4"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <ContactForm />
          </div>

          {/* info */}
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] flex justify-center items-center rounded-[5px] text-accent dark:bg-[#27272c] bg-[#27272c]/10">
                      <div className="text-[28px] ">{item.icon}</div>
                    </div>

                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
