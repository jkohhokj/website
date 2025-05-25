"use client";
import Image from "next/image";
import { authorData } from "@/data/authorData";
import Header from "@/components/Header";
import AnimatedText from "@/components/TextWave";
import { Code, Rss, FileUser} from "lucide-react";
import { Mail, Github, Linkedin } from "lucide-react";

const iconSize: number = 60;
function AboutMe() {
  return (
    <div className="flex flex-col items-center space-x-2 pt-8">
      {
        <Image
          src={authorData.imgSrc}
          alt="avatar"
          width={100}
          height={100}
          className="h-60 w-60 rounded-full transform hover:scale-110 duration-1000"
        />
      }

      <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
        {authorData.name}
      </h3>
      <div className="text-gray-500 dark:text-gray-400">
        {authorData.occupation}
      </div>
      <div className="text-gray-500 dark:text-gray-400">
        {authorData.company}
      </div>
      <br />
      <div className="flex space-x-10 pt-3">
        <div>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href={`mailto:${authorData.mail}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={iconSize} />
          </a>
        </div>
        <div>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href={`mailto:${authorData.github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={iconSize} />
          </a>
        </div>
        <div>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href={`mailto:${authorData.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={iconSize} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#040404] to-[#041A42] w-full grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-4 row-start-2 items-center">
        <AboutMe />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="text-6xl" style={{ fontFamily: "Pacifico, cursive" }}>
          <AnimatedText text="Thank you for visiting!" />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={authorData.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileUser color="white" size={36} />
          Resume
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={authorData.source}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Code color="white" size={36} />
          Source Code
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={authorData.blog}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Rss color="white" size={36} />
          Blog
        </a>
      </footer>
    </div>
  );
}
