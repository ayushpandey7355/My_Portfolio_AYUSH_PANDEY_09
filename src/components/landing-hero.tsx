import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  className="pointer-events-none flex flex-col-reverse md:flex-row items-center justify-center max-h-[1000px] min-h-[calc(100vh-200px)] px-6 sm:px-14 md:px-20 py-0"
>
  {/* Text Section */}
  <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-center md:text-left">
    <div className="mx-auto md:mx-0 max-w-3xl">
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
    <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-2 border-accent m-0">
      <img
        src="https://i.ibb.co/PZntFtx4/Ayush-portfolio.png"
        alt="Ayush Pandey Profile"
        className="w-full h-full object-cover"
      />
    </div>
  </FadeUp>
</motion.section>

  );
}
