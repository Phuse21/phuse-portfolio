"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Particles from "./Particles";

const Bg = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const particleColors =
    currentTheme === "dark" ? ["#ffffff", "#ffffff"] : ["#1c1c22", "#1c1c22"];

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <Particles
        key={currentTheme} // Force re-render when theme changes
        particleColors={particleColors}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={false}
      />
    </div>
  );
};

export default Bg;
