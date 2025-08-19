import { cn } from "@/lib/utils";
import React from "react";

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 50,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  centerOffsetY = 0,
  ...props
}) {
  const calculatedDuration = duration / speed;
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-accent/40 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy={`calc(50% + ${centerOffsetY}px)`}
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;
        return (
          <div
            style={{
              "--duration": calculatedDuration,
              "--radius": radius,
              "--angle": angle,
              "--icon-size": `${iconSize}px`,
              "--center-offset-y": `${centerOffsetY}px`,
            }}
            className={cn(
              `absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full`,
              { "[animation-direction:reverse]": reverse },
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
