import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Mahfuz Abdallah</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">
              I'm all about building smooth, user-friendly experiences, and I'm
              pretty comfortable working with a range of programming languages,
              frameworks, and tools to make it happen.
            </p>

            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="upperCase flex items-center gap-2 hover:text-[#ffffff]"
              >
                <Link
                  href="/assets/Resume1.pdf"
                  passHref
                  download
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <span>Download Cv</span>
                  <FiDownload className="text-xl" />
                </Link>
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-[#ffffff] transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
