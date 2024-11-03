"use client";
import Image from "next/image";
import SocialIcon from '@/components/social-icons'
import Card from '@/components/Card';
import projectsData, {interestsData} from "@/data/projectsData";
import { authorData } from "@/data/authorData";
import RandomFont from "@/components/RandomFont";
import Header from "@/components/Header";
import SmallCard from "@/components/SmallCard";
import AnimatedText from "@/components/TextWave";

import '@/styles/glitch.css';



const current_projects = [
    'Accelerating hardware for Post-Quantum Cryptography ⚡',
    'Training my first powerlifting split 💪',
    'Learning modern hip-hop 🕺',
    'Reformatting my website 🌐'
]





function Introduction(){

    return (
        <div>
            <div className="flex text-slate-100 text-4xl">
                <span>Hey</span>
                <div className="w-14 h-10 animate-rotate">👋</div>
                <span>I&apos;m Jayden Koh!</span>
            </div>
            <RandomFont text="and this is my website."/>
        </div>
    )
}

function CurrentInterests(){
  return (
    <>
      <div className="w-[900px] divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Current Interests
          </h1>

        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {interestsData.map((d) => (
                <SmallCard
                key = {d.title}
                title={d.title}
                description={d.description}
                href={d.href}
                />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}


function PastProjects() {
  return (
    <>
      <div className="w-[900px] divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Past Projects
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
  )
}

function AboutMe(){
    return(
      <div className="w-3/4 divide-y divide-gray-200 dark:divide-gray-700">
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            <br/>
            <div className="prose max-w-prose outline outline-offset-8 outline-blue-200/20 rounded-xl">
            <div className="prose outline outline-offset-4 outline-blue-500/30 rounded-xl">
            <div className="prose outline outline-offset-2 outline-blue-600/35 rounded-xl">
            <div className="prose outline outline-offset-1 outline-blue-600/35 rounded-xl">
            <div className="prose outline outline-offset-0 outline-blue-600/35 rounded-xl">
            <div className="text-center">
                I&apos;m a Computer Engineering student at Texas A&M University from Houston, TX.
                I&apos;m also a cybersecurity, embedded systems, and full stack enthusiast.
                My hobbies include bouldering 🧗‍♂️, lifting 🏋️, folding origami 🦢, and playing CTFs 🚩.
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            <br/>
            <br/>
            <br/>
                <div className="text-xl bg-gradient-to-r from-[#243A82] to-* rounded-lg">
                    &nbsp; The last few weeks I&apos;ve been busy with:
                    </div>
            <br/>
            <div className="mb-2 flex flex-wrap">
                <ul className="list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    {current_projects.map((d) => (
                        <li className="mb-2 hover:bg-gradient-to-l from-[#243A82] to-slate-500/25 rounded-lg" key={d}>{"(~) "+d}</li>
                    ))}
                </ul>
                </div>

          </div>
          <div className="flex flex-col items-center space-x-2 pt-8">
            {(
              <Image
                src={authorData.imgSrc}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full transform hover:scale-110 duration-1000"
              />
            )}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{authorData.name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{authorData.occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{authorData.company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${authorData.mail}`} />
              <SocialIcon kind="github" href={authorData.github} />
              <SocialIcon kind="linkedin" href={authorData.linkedin} />
            </div>
          </div>

        </div>
      </div>
    )
}



// const PacificoComp = ({text}: Props) => {
//   return (
//     <>
//         <link
//         href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
//         rel="stylesheet"
//       />
//       <div className="text-6xl" style={{ fontFamily: 'Pacifico, cursive' }}>
//         {text}
//       </div>

//     </>
//   );
// };


export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#040404] to-[#041A42] w-full grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Header/>   
      <main className="flex flex-col gap-4 row-start-2 items-center">
        
        <Introduction/>

        <AboutMe/>

        <CurrentInterests/>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://www.instagram.com/jkoh.jimbro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-2xl">🏋️</p>Watch me lift!
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://blog.jkoh.dev/blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-2xl">📖</p>Read my blog!
          </a>
        </div>

        <PastProjects/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='text-6xl' style={{ fontFamily: 'Pacifico, cursive' }}>
        <AnimatedText text="Thank you for visiting!"/>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={authorData.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Resume
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={authorData.source}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Source Code
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={authorData.blog}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Blog
        </a>
      </footer>
    </div>

  );
}
