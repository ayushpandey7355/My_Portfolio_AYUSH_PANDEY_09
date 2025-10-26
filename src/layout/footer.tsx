import ContactButton from "@/components/contact-form/contact-button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-16 bg-transparent px-6 py-10 sm:px-14 md:px-20">
      {/* Contact Section */}
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 rounded-2xl bg-accent p-10 text-background shadow-lg sm:gap-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-background px-4 py-1 text-sm font-semibold uppercase text-black md:text-base">
            Get in Touch
          </span>
        </div>

        {/* Email */}
        <a
          href={`mailto:${siteMetadata.email}`}
          target="_blank"
          className="text-center text-xl font-semibold underline transition-colors hover:text-background/80 sm:text-2xl md:text-3xl lg:text-4xl"
        >
          {siteMetadata.email}
        </a>

        {/* Button */}
        <div className="flex justify-center">
          <ContactButton />
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="flex w-full max-w-5xl flex-col items-center justify-between gap-6 text-center text-sm text-foreground sm:flex-row sm:gap-0">
        <span className="text-foreground/90">
          © {new Date().getFullYear()} Ayush Pandey
        </span>
        <div className="flex gap-6">
          <a
            href={siteMetadata.github}
            target="_blank"
            aria-label="GitHub"
            className="h-6 w-6 transition-transform hover:scale-110"
          >
            <GithubIcon className="text-black transition-colors hover:text-gray-700" />
          </a>

          <a
            href={siteMetadata.linkedin}
            target="_blank"
            aria-label="LinkedIn"
            className="h-6 w-6 transition-transform hover:scale-110"
          >
            <LinkedinIcon className="text-black transition-colors hover:text-gray-700" />
          </a>
        </div>
      </div>
    </footer>
  );
}
