import { ArrowDownRight, ArrowRight, ArrowUpRight, CircuitBoard, ExternalLink, FileText, Github, Linkedin, Mail, Terminal, Workflow } from "lucide-react";
import Link from "next/link";
import { authorData } from "@/data/authorData";

const experience = [
  {
    period: "2026 — present",
    company: "Sandia National Laboratories",
    role: "R&D Engineering Intern",
    detail: "Year-round research internship. Project details are not publicly disclosed.",
  },
  {
    period: "Spring 2026",
    company: "Lockheed Martin",
    role: "Software Engineering Intern",
    detail: "Embedded software internship. Project details are not publicly disclosed.",
  },
  {
    period: "2024 — 2025",
    company: "Texas A&M · SETH Lab",
    role: "Undergraduate Researcher / Hardware Security Intern",
    detail: "RISC-V processor fuzzing research; discovered six processor security bugs and evaluated coverage against existing approaches.",
    link: "https://hardware-fuzz.jkoh.dev/blog/summer25_jayden",
  },
  {
    period: "Summers 2023 & 2024",
    company: "MIT Lincoln Laboratory",
    role: "Embedded Security Intern / BWSI Instructor",
    detail: "Worked on embedded security education and secure firmware concepts; led a team of eight instructors.",
  },
];

const skills = [
  { label: "Hardware", value: "SystemVerilog · Verilog · FPGA · RISC-V · SoC" },
  { label: "Verification", value: "Assertions · Formal methods · RTL simulation · Fuzzing" },
  { label: "Low-level", value: "C/C++ · Python · Linux · Firmware · Device drivers" },
  { label: "Tooling", value: "Vivado · Verilator · VCS · Git · Docker" },
];

function ExternalAnchor({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-sky-300">{children}</p>;
}

function SectionHeading({ eyebrow, title, aside }: { eyebrow: string; title: string; aside?: string }) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end">
      <div><Eyebrow>{eyebrow}</Eyebrow><h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2></div>
      {aside && <p className="max-w-sm text-sm leading-6 text-slate-400">{aside}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080e18] text-slate-200 selection:bg-sky-400/30">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[620px] overflow-hidden" aria-hidden="true">
        <div className="absolute -right-56 -top-72 h-[700px] w-[700px] rounded-full bg-sky-500/[0.07] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.16]" style={{ backgroundImage: "linear-gradient(rgba(148,163,184,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.18) 1px, transparent 1px)", backgroundSize: "72px 72px", maskImage: "linear-gradient(to bottom, black, transparent)" }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 py-6">
          <Link href="/" className="font-mono text-sm font-semibold tracking-wider text-white transition hover:text-sky-300">JAYDEN KOH<span className="text-sky-400"> /</span></Link>
          <nav aria-label="Primary navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
            <a href="#work" className="transition hover:text-white">Work</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <ExternalAnchor href={authorData.blog} className="transition hover:text-white">Writing <ArrowUpRight size={13} className="inline" /></ExternalAnchor>
          </nav>
        </header>

        <main>
          <section className="grid gap-14 pb-20 pt-20 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end lg:pb-28 lg:pt-28" aria-labelledby="hero-title">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/[0.07] px-3 py-1.5 font-mono text-xs text-sky-200">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-300" aria-hidden="true" />
                HARDWARE / SYSTEMS ENGINEERING
              </div>
              <h1 id="hero-title" className="max-w-3xl text-5xl font-semibold leading-[1.06] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                I build systems <span className="text-sky-300">close to the metal.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                I&apos;m Jayden, a computer engineering student at Texas A&amp;M working across <strong className="font-medium text-white">RISC-V architecture, FPGA/RTL design, hardware verification, and embedded security.</strong>
              </p>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-400">
                I care about understanding the full stack, from what software asks of the machine to what the hardware actually guarantees.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#work" className="inline-flex items-center gap-2 rounded-lg bg-sky-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200">Explore engineering work <ArrowDownRight size={17} /></a>
                <ExternalAnchor href={authorData.resume} className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:border-sky-300/70 hover:bg-white/5"><FileText size={17} /> Résumé</ExternalAnchor>
                <ExternalAnchor href={authorData.github} className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-3 text-sm text-slate-200 transition hover:border-sky-300/70 hover:bg-white/5" ><Github size={18} /> GitHub</ExternalAnchor>
                <a href={`mailto:${authorData.mail}`} className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-3 text-sm text-slate-200 transition hover:border-sky-300/70 hover:bg-white/5"><Mail size={18} /> Email</a>
              </div>
              <p className="mt-5 font-mono text-xs text-slate-500">Texas A&amp;M University · B.S. Computer Engineering · Dec 2027</p>
            </div>

            <aside aria-label="Engineering focus" className="rounded-xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/20">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4"><span className="font-mono text-xs uppercase tracking-widest text-slate-400">Areas of focus</span><CircuitBoard size={19} className="text-sky-300" /></div>
              <div className="space-y-5">
                {[
                  ["01", "Processor design & verification", "RISC-V · RTL · SoCs"],
                  ["02", "Low-latency hardware", "FPGA · Pipelining · Timing"],
                  ["03", "Systems & security", "Firmware · Linux · Fuzzing"],
                ].map(([num, title, sub]) => <div className="flex gap-4" key={num}><span className="pt-0.5 font-mono text-xs text-sky-300">{num}</span><div><p className="text-sm font-medium text-white">{title}</p><p className="mt-1 font-mono text-xs text-slate-500">{sub}</p></div></div>)}
              </div>
            </aside>
          </section>

          <section aria-label="Selected engineering results" className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
              ["6", "RISC-V security bugs found", "Research with SETH Lab"],
              ["3.33×", "Coverage improvement", "Compared with DiFuzzRTL"],
              ["25–41 ns", "FPGA datapath latency", "Internal profiling; not wire-to-wire"],
            ].map(([metric, caption, detail]) => <div key={metric} className="bg-[#101a29] p-6 sm:p-7"><p className="text-3xl font-semibold tracking-tight text-white">{metric}</p><p className="mt-2 text-sm font-medium text-slate-200">{caption}</p><p className="mt-1 text-xs text-slate-500">{detail}</p></div>)}
          </section>

          <section id="work" className="scroll-mt-24 py-24" aria-labelledby="work-title">
            <SectionHeading eyebrow="01 / PUBLIC WORK" title="Selected engineering work" aside="Technical depth, the design decisions behind it, and the evidence available to inspect." />
            <div className="grid gap-5 lg:grid-cols-2">
              <article className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#101a29] transition hover:border-sky-400/40">
                <div className="relative flex min-h-52 items-center justify-center overflow-hidden border-b border-white/10 bg-[#0a1422] px-7 py-8">
                  <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "linear-gradient(90deg, transparent 96%, #26618b 100%)", backgroundSize: "23px 23px" }} />
                  <div className="relative grid w-full max-w-md grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3 font-mono text-[10px] sm:text-xs">
                    <div className="rounded-md border border-sky-400/40 bg-sky-400/10 px-2 py-5 text-center text-sky-100">ORDER<br />STREAM</div>
                    <ArrowRight size={16} className="text-sky-400" />
                    <div className="rounded-md border border-sky-400/70 bg-sky-400/20 px-2 py-5 text-center text-white">RTL<br />BOOK CORE</div>
                    <ArrowRight size={16} className="text-sky-400" />
                    <div className="rounded-md border border-sky-400/40 bg-sky-400/10 px-2 py-5 text-center text-sky-100">BBO /<br />LATENCY</div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-sky-300"><span>Independent build</span><span className="text-slate-600">/</span><span>FPGA · RTL</span></div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">Low-latency FPGA order book</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">Built and profiled an FPGA order-book datapath on an Arty A7-35T, with best-bid/offer tracking, a hardware event generator, and in-design latency measurement.</p>
                  <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs text-slate-300"><span className="rounded border border-white/10 px-2 py-1">200 MHz target</span><span className="rounded border border-white/10 px-2 py-1">25–41 ns measured</span><span className="rounded border border-white/10 px-2 py-1">~18% LUTs</span></div>
                  <Link href="/projects/fpga-order-book" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition group-hover:gap-3">Read engineering case study <ArrowUpRight size={16} /></Link>
                </div>
              </article>
              <article className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#101a29] transition hover:border-sky-400/40">
                <div className="relative flex min-h-52 items-center justify-center overflow-hidden border-b border-white/10 bg-[#0a1422] px-7 py-8">
                  <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "linear-gradient(90deg, transparent 96%, #26618b 100%)", backgroundSize: "23px 23px" }} />
                  <div className="relative w-full max-w-sm rounded-lg border border-white/10 bg-[#080e18] p-4 font-mono text-xs">
                    <div className="mb-3 flex gap-1.5"><span className="h-2 w-2 rounded-full bg-rose-500/70"/><span className="h-2 w-2 rounded-full bg-amber-500/70"/><span className="h-2 w-2 rounded-full bg-emerald-500/70"/></div>
                    <p className="text-slate-500">$ fuzz --target riscv --coverage</p>
                    <p className="mt-2 text-sky-300">[+] coverage-guided exploration</p>
                    <p className="mt-1 text-emerald-300">[+] 6 security bugs discovered</p>
                    <p className="mt-1 text-slate-400">[+] baseline comparison: 3.33×</p>
                    <p className="mt-2 text-slate-500">$ _</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-sky-300"><span>SETH Lab research</span><span className="text-slate-600">/</span><span>Hardware security</span></div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">Coverage-guided RISC-V fuzzing</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">Investigated security bugs in open-source RISC-V processors, combining architectural understanding with simulation and guided test generation. Research yielded six bugs and improved coverage against a prior baseline.</p>
                  <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs text-slate-300"><span className="rounded border border-white/10 px-2 py-1">RISC-V</span><span className="rounded border border-white/10 px-2 py-1">RTL simulation</span><span className="rounded border border-white/10 px-2 py-1">Hardware fuzzing</span></div>
                  <ExternalAnchor href="https://hardware-fuzz.jkoh.dev/blog/summer25_jayden" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition group-hover:gap-3">Read public research notes <ArrowUpRight size={16} /></ExternalAnchor>
                </div>
              </article>
            </div>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <ExternalAnchor href="https://github.com/jkohhokj/comsec-rankings" className="group flex items-start gap-4 rounded-xl border border-white/10 bg-[#101a29]/60 p-6 transition hover:border-sky-400/40"><Terminal className="mt-1 shrink-0 text-sky-300" size={22} /><div><h3 className="font-semibold text-white">Computer security research rankings <ArrowUpRight size={15} className="inline text-slate-500 group-hover:text-sky-300" /></h3><p className="mt-2 text-sm leading-6 text-slate-400">Public data project aggregating computer-security conference publications into browsable research rankings.</p><p className="mt-3 font-mono text-[11px] uppercase tracking-wide text-sky-300">View source code</p></div></ExternalAnchor>
              <ExternalAnchor href="https://github.com/jkohhokj/LangGuessr" className="group flex items-start gap-4 rounded-xl border border-white/10 bg-[#101a29]/60 p-6 transition hover:border-sky-400/40"><Workflow className="mt-1 shrink-0 text-sky-300" size={22} /><div><h3 className="font-semibold text-white">LangGuessr <ArrowUpRight size={15} className="inline text-slate-500 group-hover:text-sky-300" /></h3><p className="mt-2 text-sm leading-6 text-slate-400">Shipped a web application for identifying written languages, with multilingual content and an interactive game interface.</p><p className="mt-3 font-mono text-[11px] uppercase tracking-wide text-sky-300">View source code</p></div></ExternalAnchor>
            </div>
          </section>

          <section id="experience" className="scroll-mt-24 pb-24" aria-labelledby="experience-title">
            <SectionHeading eyebrow="02 / EXPERIENCE" title="Research & engineering experience" aside="Public descriptions are deliberately limited where employer work is confidential." />
            <div className="divide-y divide-white/10 rounded-xl border border-white/10 bg-[#101a29]/60">
              {experience.map((item) => <article key={item.company} className="grid gap-3 p-6 sm:grid-cols-[150px_1fr] sm:gap-8 sm:p-7"><p className="pt-1 font-mono text-xs text-slate-500">{item.period}</p><div><h3 className="text-lg font-semibold text-white">{item.company}</h3><p className="mt-1 text-sm font-medium text-sky-300">{item.role}</p><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">{item.detail}</p>{item.link && <ExternalAnchor href={item.link} className="mt-3 inline-flex items-center gap-1.5 text-sm text-sky-300 hover:text-sky-200">Public write-up <ArrowUpRight size={14} /></ExternalAnchor>}</div></article>)}
            </div>
            <p className="mt-5 text-sm text-slate-500">Also: Academic Instructor, Texas A&amp;M Cohort in Hardware Security · Security Engineering, TAMU Cybersecurity Center · Director, idekCTF.</p>
          </section>

          <section id="about" className="scroll-mt-24 pb-24" aria-labelledby="about-title">
            <SectionHeading eyebrow="03 / BACKGROUND" title="A hardware-first, systems-wide perspective" />
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <p className="text-base leading-8 text-slate-300">I study computer engineering at <strong className="font-medium text-white">Texas A&amp;M University</strong>, with minors in mathematics and cybersecurity. My interests center on processor microarchitecture, design verification, low-latency FPGA systems, and trustworthy embedded software.</p>
                <p className="mt-4 text-base leading-8 text-slate-400">I enjoy work that connects RTL, operating systems, and the application above them. Outside of research, I&apos;ve organized security competitions and built tools used by other engineers and students.</p>
                <div className="mt-7 flex flex-wrap gap-5 text-sm"><ExternalAnchor href={authorData.linkedin} className="inline-flex items-center gap-2 text-slate-200 hover:text-sky-300"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></ExternalAnchor><ExternalAnchor href={authorData.blog} className="inline-flex items-center gap-2 text-slate-200 hover:text-sky-300"><ExternalLink size={17} /> Technical writing <ArrowUpRight size={14} /></ExternalAnchor></div>
              </div>
              <div className="space-y-0 divide-y divide-white/10 rounded-xl border border-white/10 bg-[#101a29]/60 px-6">
                {skills.map((skill) => <div key={skill.label} className="grid gap-2 py-4 sm:grid-cols-[110px_1fr]"><span className="font-mono text-xs uppercase tracking-wider text-sky-300">{skill.label}</span><span className="text-sm leading-6 text-slate-300">{skill.value}</span></div>)}
              </div>
            </div>
          </section>

          <section className="mb-20 rounded-xl border border-sky-400/25 bg-sky-400/[0.06] px-7 py-9 sm:px-10 sm:py-12">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div><Eyebrow>CONTACT</Eyebrow><h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Interested in working together?</h2><p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">I&apos;m interested in challenging hardware design, verification, FPGA, and embedded systems problems.</p></div>
              <a href={`mailto:${authorData.mail}`} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-sky-300 px-6 py-3.5 text-sm font-semibold text-slate-950 hover:bg-sky-200">Get in touch <ArrowUpRight size={18} /></a>
            </div>
          </section>
        </main>
        <footer className="flex flex-col justify-between gap-4 border-t border-white/10 py-7 text-xs text-slate-500 sm:flex-row"><p>© {new Date().getFullYear()} Jayden Koh · Built with Next.js</p><p>Personal projects and public research only. Confidential project details intentionally omitted.</p></footer>
      </div>
    </div>
  );
}
