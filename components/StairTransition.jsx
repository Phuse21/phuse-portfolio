"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none flex z-40">
            <Stairs />
          </div>

          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { duration: 0.4, delay: 1, ease: "easeInOut" },
            }}
            className="h-screen w-screen fixed bg-primary pointer-events-none top-0"
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
