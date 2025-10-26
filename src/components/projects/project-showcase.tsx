import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

import { ArrowTopRight } from "@/components/icons";
import ProjectShowcaseList, {
  type ProjectShowcaseListItem,
} from "@/components/projects/project-showcase-list";

const generateImageData = (proj: ProjectShowcaseListItem[]) => {
  return proj.map((p) => p.image);
};

interface ProjectShowcaseProps {
  projects: ProjectShowcaseListItem[];
}

export default function ProjectShowcase(props: ProjectShowcaseProps) {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const images = useMemo(() => {
    return generateImageData(props.projects);
  }, [props.projects]);

  const handleAnimate = (index: number) => {
    if (index === currentImage) return;
    setCurrentImage(index);
  };

  return (
    <section className="overflow-hidden px-6 py-24 sm:px-10 md:px-16 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="mb-12 text-2xl font-bold text-accent sm:text-3xl">
          My Projects
        </h2>

        {/* Desktop / Tablet Layout */}
        <div className="hidden grid-cols-2 items-center gap-10 lg:grid">
          {/* Left: Project List */}
          <div className="flex flex-col gap-10">
            {props.projects.map((proj, index) => (
              <ProjectShowcaseList
                key={index}
                activeProject={currentImage}
                toggleList={handleAnimate}
                data={proj}
              />
            ))}
          </div>

          {/* Right: Image */}
          <div className="relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={props.projects[currentImage].title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
              >
                <Image
                  src={images[currentImage].LIGHT}
                  unoptimized
                  width={600}
                  height={400}
                  className="h-auto w-full rounded-xl border border-zinc-300 object-cover shadow-lg"
                  alt={props.projects[currentImage].title}
                />
                {images[currentImage].DARK && (
                  <Image
                    src={images[currentImage].DARK!}
                    unoptimized
                    width={600}
                    height={400}
                    className="hidden h-auto w-full rounded-xl border border-zinc-300 object-cover shadow-lg dark:block"
                    alt={props.projects[currentImage].title}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col gap-12 lg:hidden">
          {props.projects.map((proj, index) => (
            <div key={index} className="flex flex-col gap-4">
              <Link href={proj.href}>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-2xl font-bold text-accent sm:text-3xl">
                    {proj.index + 1}.
                  </span>
                  <span className="text-2xl font-bold text-accent underline underline-offset-2 sm:text-3xl">
                    {proj.title}
                  </span>
                </div>
                <p className="mt-2 flex flex-wrap gap-2 text-base font-medium text-accent-foreground">
                  {proj.tags.map((tag, i) => (
                    <span key={i}>#{tag}</span>
                  ))}
                </p>
              </Link>
              <Image
                src={proj.image.LIGHT}
                unoptimized
                width={500}
                height={300}
                className="mt-4 h-auto w-full rounded-xl border border-zinc-300 object-cover shadow-lg"
                alt={proj.title}
              />
            </div>
          ))}
        </div>

        {/* "See More" Button */}
        <div className="mt-16">
          <Link
            href="/projects"
            className="group relative flex max-w-max items-center gap-4 text-base font-semibold sm:text-lg md:text-xl"
          >
            <div className="relative max-w-max">
              <span className="text-accent">See more projects</span>
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 origin-left rounded-lg bg-accent transition-[width] duration-300 group-hover:w-full"></span>
            </div>
            <div className="h-8 w-8">
              <ArrowTopRight className="rotate-45 text-accent transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.1]" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
