import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image"; // ✅ Added for optimized image handling
import FadeUp from "@/animation/fade-up";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex max-h-[1000px] min-h-[calc(100vh-200px)] flex-col-reverse items-center justify-center px-6 py-0 sm:px-14 md:flex-row md:px-20"
    >
      {/* Text Section */}
      <div className="flex w-full flex-col items-start justify-center text-center md:w-1/2 md:text-left">
        <div className="mx-auto max-w-3xl md:mx-0">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                Ayush Pandey
              </h1>
              <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                Software Developer
              </span>
            </FadeUp>

            <FadeUp key="description" duration={0.6} delay={0.2}>
              <p className="mt-4 max-w-xl text-base font-medium text-zinc-900 dark:text-zinc-200 sm:text-lg md:text-xl">
                I am a software developer specializing in building
                high-performance, user-focused web applications. Skilled in{" "}
                <span className="font-semibold text-accent">ReactJS</span>,{" "}
                <span className="font-semibold text-accent">NextJS</span>,{" "}
                <span className="font-semibold text-accent">React Native</span>,{" "}
                <span className="font-semibold text-accent">SolidJS</span>, and
                an expert in{" "}
                <span className="font-semibold text-accent">JavaScript</span>,{" "}
                <span className="font-semibold text-accent">HTML</span>, and{" "}
                <span className="font-semibold text-accent">CSS</span>.
              </p>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>

      {/* Profile Image Section */}
      <FadeUp key="profile-image" duration={0.8} delay={0.3}>
        <div className="m-0 h-48 w-48 overflow-hidden rounded-full border-2 border-accent shadow-2xl sm:h-60 sm:w-60 md:h-80 md:w-80">
          <Image
            src="https://i.ibb.co/PZntFtx4/Ayush-portfolio.png"
            alt="Ayush Pandey Profile"
            width={320} // Adjust for best resolution
            height={320}
            className="h-full w-full object-cover"
            priority // ✅ ensures faster loading
          />
        </div>
      </FadeUp>
    </motion.section>
  );
}
