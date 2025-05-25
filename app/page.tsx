"use client";
import Image from "next/image";
import SocialIcon from "@/components/social-icons";
import Card from "@/components/Card";
import projectsData, { interestsData } from "@/data/projectsData";
import { authorData } from "@/data/authorData";
import Header from "@/components/Header";
import AnimatedText from "@/components/TextWave";
import { Code, Rss, FileUser } from "lucide-react";

import "@/styles/glitch.css";

function PastProjects() {
  return (
    <>
      <div className="w-[900px] divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Recent Projects
          </h1>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function AboutMe() {
  return (
    <div className="w-5/6 divide-y divide-gray-200 dark:divide-gray-700">
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-2 xl:space-y-0">
        <div className="prose max-w-none pb-8 pt-12 dark:prose-invert xl:col-span-2">
          <br />
          <div className="text-align-left">
            <div className="flex text-slate-100 text-4xl">
              <span>Hey</span>
              <div className="w-14 h-10 animate-rotate">👋</div>
              <span>I&apos;m Jayden Koh!</span>
            </div>
            I&apos;m an undergraduate student at Texas A&M University studying
            Computer Engineering. I am passionate about the intersection of
            cybersecurity, software, and hardware.
            <br />
            <br />I research hardware security at the{" "}
            <span>
              <a
                href="https://seth.engr.tamu.edu/"
                className="font-medium text-blue-200/75 underline hover:no-underline"
              >
                SETH Lab
              </a>
            </span>{" "}
            focusing on Zero-Knowledge Proof Acceleration and Hardware Fuzzing.
            I also work at{" "}
            <span>
              <a
                href="https://cybr.club/"
                className="font-medium text-blue-200/75 underline hover:no-underline"
              >
                TAMU Cybersecurity Club
              </a>
            </span>{" "}
            developing CTF challenges and infrastructure. I have previously
            interned at{" "}
            <span>
              <a
                href="https://www.ll.mit.edu/"
                className="font-medium text-blue-200/75 underline hover:no-underline"
              >
                MIT Lincoln Lab
              </a>
            </span>{" "}
            for BWSI Embedded Security.
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="flex flex-col items-center space-x-2 pt-8">
          {
            <Image
              src={authorData.imgSrc}
              alt="avatar"
              width={100}
              height={100}
              className="h-32 w-32 rounded-full transform hover:scale-110 duration-1000"
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
          <div className="flex space-x-3 pt-6">
            <SocialIcon kind="mail" href={`mailto:${authorData.mail}`} />
            <SocialIcon kind="github" href={authorData.github} />
            <SocialIcon kind="linkedin" href={authorData.linkedin} />
          </div>
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
        <PastProjects />
        <br />
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
