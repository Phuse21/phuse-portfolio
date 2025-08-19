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

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40}>
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
  );
}
