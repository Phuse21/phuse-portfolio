import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        default: "bg-accent text-primary hover:bg-accent-hover",
        primary: "bg-primary text-white",
        outline:
          "border border-accent bg-transparent text-accent hover:bg-accent hover:text-[#ffffff]",
        shimmer: [
          // Base shimmer styles
          "relative z-0 overflow-hidden border border-accent bg-transparent text-accent",
          "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
          "group cursor-pointer",
          "[background:transparent]",
        ],
      },
      size: {
        default: "h-[44px] px-6",
        md: "h-[48px] px-6",
        lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const ShimmerContent = ({
  children,
  shimmerColor = "#008080",
  shimmerDuration = "3s",
}) => (
  <>
    {/* spark container */}
    <div
      className={cn(
        "-z-30 blur-[2px]",
        "absolute inset-0 overflow-visible [container-type:size]"
      )}
      style={{
        "--shimmer-color": shimmerColor,
        "--speed": shimmerDuration,
      }}
    >
      {/* spark */}
      <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
        {/* spark before */}
        <div className="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(40deg*0.5)),transparent_0,var(--shimmer-color)_40deg,transparent_40deg)] [translate:0_0]" />
      </div>
    </div>
    {children}
    {/* Highlight */}
    <div
      className={cn(
        "absolute inset-0 size-full",
        "rounded-full px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",
        // transition
        "transform-gpu transition-all duration-300 ease-in-out",
        // on hover
        "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
        // on click
        "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"
      )}
    />
    {/* backdrop */}
    <div
      className={cn(
        "absolute -z-20 bg-transparent rounded-full inset-[0.05em]"
      )}
    />
  </>
);

const Button = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      shimmerColor = "#008080",
      shimmerDuration = "3s",
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const isShimmer = variant === "shimmer";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        style={
          isShimmer
            ? {
                "--spread": "40deg",
                "--shimmer-color": shimmerColor,
                "--speed": shimmerDuration,
                "--cut": "0.05em",
              }
            : undefined
        }
        {...props}
      >
        {isShimmer ? (
          <ShimmerContent
            shimmerColor={shimmerColor}
            shimmerDuration={shimmerDuration}
          >
            {children}
          </ShimmerContent>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
