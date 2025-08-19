"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { LineShadowText } from "./magicui/line-shadow-text";

const Logo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const shadowColor = mounted && resolvedTheme === "dark" ? "white" : "black";

  return (
    <h1 className="text-4xl font-semibold">
      {mounted ? (
        <LineShadowText className="italic" shadowColor={shadowColor}>
          Phuse
        </LineShadowText>
      ) : (
        "Phuse"
      )}
      <span className="text-accent">.</span>
    </h1>
  );
};

export default Logo;
