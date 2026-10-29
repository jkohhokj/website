import { ArrowDownRight, ArrowRight, ArrowUpRight, CircuitBoard, ExternalLink, FileText, Github, Linkedin, Mail, Terminal, Workflow } from "lucide-react";
import Link from "next/link";
import { authorData } from "@/data/authorData";

const experience = [
  {
    period: "May 2026 — present",
    company: "Sandia National Laboratories",
    role: "R&D Engineering Intern",
    detail: "Year-round research internship. Project details are not publicly disclosed.",
  },
  {
    period: "2026 — present",
    company: "Rev Silicon",
    role: "ASIC Design Verification",
    detail: "Formal and functional design verification of an AI accelerator ASIC being prepared for tapeout. Working on RTL correctness without disclosing implementation details.",
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
  { label: "Verification", value: "ASIC DV · Formal / functional verification · SVA · RTL simulation · Fuzzing" },
  { label: "Low-level", value: "C/C++ · Python · Linux · Firmware · Device drivers" },
  { label: "Tooling", value: "Vivado · Verilator · VCS · Git · Docker" },
];

function ExternalAnchor({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#a34b2d]">{children}</p>;
}

function SectionHeading({ eyebrow, title, aside }: { eyebrow: string; title: string; aside?: string }) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-3 border-b border-[#ded8cd] pb-5 sm:flex-row sm:items-end">
      <div><Eyebrow>{eyebrow}</Eyebrow><h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#1c2923] sm:text-3xl">{title}</h2></div>
      {aside && <p className="max-w-sm text-sm leading-6 text-[#58645c]">{aside}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f5ee] text-[#29362e] selection:bg-[#e9c8af]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[620px] overflow-hidden" aria-hidden="true">
        <div className="absolute -right-56 -top-72 h-[700px] w-[700px] rounded-full bg-[#be8a66]/[0.13] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.28]" style={{ backgroundImage: "radial-gradient(#c9bcab 0.6px, transparent 0.6px)", backgroundSize: "28px 28px", maskImage: "linear-gradient(to bottom, black, transparent)" }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#ded8cd] py-6">
          <Link href="/" className="font-mono text-sm font-semibold tracking-wider text-[#1c2923] transition hover:text-[#84371e]">JAYDEN KOH<span className="text-[#a34b2d]"> /</span></Link>
          <nav aria-label="Primary navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#58645c]">
            <a href="#work" className="transition hover:text-[#1c2923]">Work</a>
            <a href="#experience" className="transition hover:text-[#1c2923]">Experience</a>
            <a href="#about" className="transition hover:text-[#1c2923]">About</a>
            <ExternalAnchor href={authorData.blog} className="transition hover:text-[#1c2923]">Writing <ArrowUpRight size={13} className="inline" /></ExternalAnchor>
          </nav>
        </header>

        <main>
          <section className="grid gap-14 pb-20 pt-20 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end lg:pb-28 lg:pt-28" aria-labelledby="hero-title">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#a34b2d]/30 bg-[#a34b2d]/[0.07] px-3 py-1.5 font-mono text-xs text-[#893b23]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#a34b2d]" aria-hidden="true" />
                HARDWARE / SYSTEMS ENGINEERING
              </div>
              <h1 id="hero-title" className="max-w-3xl text-5xl font-semibold leading-[1.06] tracking-[-0.045em] text-[#1c2923] sm:text-6xl lg:text-7xl">
                I build systems <span className="text-[#a34b2d]">close to the metal.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#46544b]">
                I&apos;m Jayden, a computer engineering student at Texas A&amp;M working across <strong className="font-medium text-[#1c2923]">RISC-V architecture, FPGA/RTL design, ASIC design verification, and embedded security.</strong>
              </p>
              <p className="mt-3 max-w-2xl text-base leading-7 text-[#58645c]">
                From processor verification to FPGA prototypes and full-stack systems, I work where software meets the hardware it relies on.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#work" className="inline-flex items-center gap-2 rounded-lg bg-[#a34b2d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#84371e]">Explore engineering work <ArrowDownRight size={17} /></a>
                <ExternalAnchor href={authorData.resume} className="inline-flex items-center gap-2 rounded-lg border border-[#c9c0b2] px-5 py-3 text-sm font-medium text-[#1c2923] transition hover:border-[#a34b2d]/70 hover:bg-[#efe7dc]"><FileText size={17} /> Résumé</ExternalAnchor>
                <ExternalAnchor href={authorData.github} className="inline-flex items-center gap-2 rounded-lg border border-[#c9c0b2] px-4 py-3 text-sm text-[#29362e] transition hover:border-[#a34b2d]/70 hover:bg-[#efe7dc]" ><Github size={18} /> GitHub</ExternalAnchor>
                <a href={`mailto:${authorData.mail}`} className="inline-flex items-center gap-2 rounded-lg border border-[#c9c0b2] px-4 py-3 text-sm text-[#29362e] transition hover:border-[#a34b2d]/70 hover:bg-[#efe7dc]"><Mail size={18} /> Email</a>
              </div>
              <p className="mt-5 font-mono text-xs text-[#657168]">Texas A&amp;M University · B.S. Computer Engineering · Dec 2027</p>
              <p className="mt-3 text-sm leading-6 text-[#46544b]"><span className="font-medium text-[#a34b2d]">Current work:</span> R&amp;D at Sandia · Formal and functional ASIC verification at Rev Silicon</p>
            </div>

            <aside aria-label="Engineering focus" className="rounded-xl border border-[#ded8cd] bg-[#fffdfa] p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between border-b border-[#ded8cd] pb-4"><span className="font-mono text-xs uppercase tracking-widest text-[#58645c]">Areas of focus</span><CircuitBoard size={19} className="text-[#a34b2d]" /></div>
              <div className="space-y-5">
                {[
                  ["01", "Processor & ASIC verification", "Formal · Functional · RISC-V"],
                  ["02", "FPGA / RTL engineering", "Architecture · Pipelining · Timing"],
                  ["03", "Systems & security", "Firmware · Linux · Fuzzing"],
                ].map(([num, title, sub]) => <div className="flex gap-4" key={num}><span className="pt-0.5 font-mono text-xs text-[#a34b2d]">{num}</span><div><p className="text-sm font-medium text-[#1c2923]">{title}</p><p className="mt-1 font-mono text-xs text-[#657168]">{sub}</p></div></div>)}
              </div>
            </aside>
          </section>

          <section aria-label="Selected engineering results" className="grid gap-px overflow-hidden rounded-xl border border-[#ded8cd] bg-[#e7e0d4] sm:grid-cols-2">
            {[
              ["6", "RISC-V security bugs found", "Research with SETH Lab"],
              ["2×", "Hardware fuzzing coverage on RISC-V cores", "Compared with DiFuzzRTL"],
            ].map(([metric, caption, detail]) => <div key={metric} className="bg-[#fffdfa] p-6 sm:p-7"><p className="text-3xl font-semibold tracking-tight text-[#1c2923]">{metric}</p><p className="mt-2 text-sm font-medium text-[#29362e]">{caption}</p><p className="mt-1 text-xs text-[#657168]">{detail}</p></div>)}
          </section>

          <section id="work" className="scroll-mt-24 py-24" aria-labelledby="work-title">
            <SectionHeading eyebrow="01 / PUBLIC WORK" title="Selected engineering work" aside="Technical depth, the design decisions behind it, and the evidence available to inspect." />
            <div className="grid gap-5 lg:grid-cols-2">
              <article className="group flex flex-col overflow-hidden rounded-xl border border-[#ded8cd] bg-[#fffdfa] shadow-sm transition hover:border-[#a34b2d]/45 hover:shadow-md">
                <div className="relative flex min-h-52 items-center justify-center overflow-hidden border-b border-[#ded8cd] bg-[#f0ebe2] px-7 py-8">
                  <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "linear-gradient(90deg, transparent 96%, #a67757 100%)", backgroundSize: "23px 23px" }} />
                  <div className="relative grid w-full max-w-md grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3 font-mono text-[10px] sm:text-xs">
                    <div className="rounded-md border border-[#a34b2d]/40 bg-[#a34b2d]/10 px-2 py-5 text-center text-[#703923]">ORDER<br />STREAM</div>
                    <ArrowRight size={16} className="text-[#a34b2d]" />
                    <div className="rounded-md border border-[#a34b2d]/70 bg-[#a34b2d]/20 px-2 py-5 text-center text-[#1c2923]">RTL<br />BOOK CORE</div>
                    <ArrowRight size={16} className="text-[#a34b2d]" />
                    <div className="rounded-md border border-[#a34b2d]/40 bg-[#a34b2d]/10 px-2 py-5 text-center text-[#703923]">BBO /<br />LATENCY</div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#a34b2d]"><span>Independent build</span><span className="text-[#777e74]">/</span><span>FPGA · RTL</span></div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#1c2923]">Low-latency FPGA order book</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-[#58645c]">Built an FPGA order-book prototype on an Arty A7-35T, with best-bid/offer tracking, hardware-generated test traffic, and on-chip debugging instrumentation.</p>
                  <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs text-[#46544b]"><span className="rounded border border-[#ded8cd] px-2 py-1">X MHz clock target</span><span className="rounded border border-[#ded8cd] px-2 py-1">X% LUT utilization</span></div>
                  <Link href="/projects/fpga-order-book" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#a34b2d] transition group-hover:gap-3">Read engineering case study <ArrowUpRight size={16} /></Link>
                </div>
              </article>
              <article className="group flex flex-col overflow-hidden rounded-xl border border-[#ded8cd] bg-[#fffdfa] shadow-sm transition hover:border-[#a34b2d]/45 hover:shadow-md">
                <div className="relative flex min-h-52 items-center justify-center overflow-hidden border-b border-[#ded8cd] bg-[#f0ebe2] px-7 py-8">
                  <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "linear-gradient(90deg, transparent 96%, #a67757 100%)", backgroundSize: "23px 23px" }} />
                  <div className="relative w-full max-w-sm rounded-lg border border-[#30433a] bg-[#21312a] p-4 font-mono text-xs shadow-lg">
                    <div className="mb-3 flex gap-1.5"><span className="h-2 w-2 rounded-full bg-[#d9ad98]"/><span className="h-2 w-2 rounded-full bg-[#e4c7a0]"/><span className="h-2 w-2 rounded-full bg-[#aac3aa]"/></div>
                    <p className="text-[#b9c9bd]">$ fuzz --target riscv --coverage</p>
                    <p className="mt-2 text-[#f4ba91]">[+] coverage-guided exploration</p>
                    <p className="mt-1 text-[#9acbb4]">[+] 6 security bugs discovered</p>
                    <p className="mt-1 text-[#dde9de]">[+] coverage vs. baseline: 2×</p>
                    <p className="mt-2 text-[#b9c9bd]">$ _</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#a34b2d]"><span>SETH Lab research</span><span className="text-[#777e74]">/</span><span>Hardware security</span></div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#1c2923]">Coverage-guided RISC-V fuzzing</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-[#58645c]">Investigated security bugs in open-source RISC-V processors, combining architectural understanding with simulation and guided test generation. Research yielded six bugs and 2× coverage compared with a prior fuzzing baseline.</p>
                  <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs text-[#46544b]"><span className="rounded border border-[#ded8cd] px-2 py-1">RISC-V</span><span className="rounded border border-[#ded8cd] px-2 py-1">RTL simulation</span><span className="rounded border border-[#ded8cd] px-2 py-1">Hardware fuzzing</span></div>
                  <ExternalAnchor href="https://hardware-fuzz.jkoh.dev/blog/summer25_jayden" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#a34b2d] transition group-hover:gap-3">Read public research notes <ArrowUpRight size={16} /></ExternalAnchor>
                </div>
              </article>
            </div>
            <article className="mt-5 grid overflow-hidden rounded-xl border border-[#ded8cd] bg-[#fffdfa] shadow-sm transition hover:border-[#a34b2d]/45 hover:shadow-md lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
              <div className="flex min-h-64 items-center justify-center border-b border-[#ded8cd] bg-[#f0ebe2] p-7 lg:border-b-0 lg:border-r">
                <div className="w-full max-w-md space-y-3 font-mono text-xs">
                  <div className="rounded-lg border border-[#a34b2d]/30 bg-[#a34b2d]/[0.07] px-4 py-3 text-center text-[#703923]">Broker reports / market data</div>
                  <div className="mx-auto h-5 w-px bg-[#a34b2d]/50" aria-hidden="true" />
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-[#d6cec0] bg-[#fffdfa] px-3 py-4 text-center text-[#29362e]">Scheduled ingestion</div>
                    <div className="rounded-lg border border-[#d6cec0] bg-[#fffdfa] px-3 py-4 text-center text-[#29362e]">API integration</div>
                  </div>
                  <div className="mx-auto h-5 w-px bg-[#a34b2d]/50" aria-hidden="true" />
                  <div className="rounded-lg border border-[#a34b2d]/40 bg-[#a34b2d]/10 px-4 py-3 text-center text-[#703923]">Portfolio dashboard</div>
                </div>
              </div>
              <div className="flex flex-col p-7 sm:p-8">
                <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#a34b2d]"><span>Student investment fund</span><span className="text-[#777e74]">/</span><span>Systems · Full-stack</span></div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#1c2923]">SinnFund — Investment Platform</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[#58645c]">Lead infrastructure and web integration for a student-run investment platform. The system connects scheduled brokerage-report ingestion, market-data APIs, and portfolio visibility for fund members. Work also includes operational tooling and trade-workflow integration.</p>
                <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs text-[#46544b]"><span className="rounded border border-[#ded8cd] px-2 py-1">Python</span><span className="rounded border border-[#ded8cd] px-2 py-1">Linux / systemd</span><span className="rounded border border-[#ded8cd] px-2 py-1">APIs</span><span className="rounded border border-[#ded8cd] px-2 py-1">Web infrastructure</span></div>
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <ExternalAnchor href="https://sinnfund.jkoh.dev" className="inline-flex items-center gap-2 text-sm font-semibold text-[#a34b2d] hover:text-[#84371e]">Visit SinnFund website <ExternalLink size={16} /></ExternalAnchor>
                  <ExternalAnchor href="https://github.com/SinnQuant/sinnfund-infra" className="inline-flex items-center gap-2 text-sm font-semibold text-[#a34b2d] hover:text-[#84371e]"><Github size={16} /> Source repository <ArrowUpRight size={16} /></ExternalAnchor>
                </div>
              </div>
            </article>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <ExternalAnchor href="https://github.com/jkohhokj/comsec-rankings" className="group flex items-start gap-4 rounded-xl border border-[#ded8cd] bg-[#fffdfa]/85 p-6 shadow-sm transition hover:border-[#a34b2d]/45 hover:shadow-md"><Terminal className="mt-1 shrink-0 text-[#a34b2d]" size={22} /><div><h3 className="font-semibold text-[#1c2923]">Computer security research rankings <ArrowUpRight size={15} className="inline text-[#657168] group-hover:text-[#84371e]" /></h3><p className="mt-2 text-sm leading-6 text-[#58645c]">Public data project aggregating computer-security conference publications into browsable research rankings.</p><p className="mt-3 font-mono text-[11px] uppercase tracking-wide text-[#a34b2d]">View source code</p></div></ExternalAnchor>
              <ExternalAnchor href="https://github.com/jkohhokj/LangGuessr" className="group flex items-start gap-4 rounded-xl border border-[#ded8cd] bg-[#fffdfa]/85 p-6 shadow-sm transition hover:border-[#a34b2d]/45 hover:shadow-md"><Workflow className="mt-1 shrink-0 text-[#a34b2d]" size={22} /><div><h3 className="font-semibold text-[#1c2923]">LangGuessr <ArrowUpRight size={15} className="inline text-[#657168] group-hover:text-[#84371e]" /></h3><p className="mt-2 text-sm leading-6 text-[#58645c]">Shipped a web application for identifying written languages, with multilingual content and an interactive game interface.</p><p className="mt-3 font-mono text-[11px] uppercase tracking-wide text-[#a34b2d]">View source code</p></div></ExternalAnchor>
            </div>
          </section>

          <section id="experience" className="scroll-mt-24 pb-24" aria-labelledby="experience-title">
            <SectionHeading eyebrow="02 / EXPERIENCE" title="Research & engineering experience" aside="Public descriptions are deliberately limited where employer work is confidential." />
            <div className="divide-y divide-[#ded8cd] rounded-xl border border-[#ded8cd] bg-[#fffdfa]/85">
              {experience.map((item) => <article key={item.company} className="grid gap-3 p-6 sm:grid-cols-[150px_1fr] sm:gap-8 sm:p-7"><p className="pt-1 font-mono text-xs text-[#657168]">{item.period}</p><div><h3 className="text-lg font-semibold text-[#1c2923]">{item.company}</h3><p className="mt-1 text-sm font-medium text-[#a34b2d]">{item.role}</p><p className="mt-3 max-w-2xl text-sm leading-6 text-[#58645c]">{item.detail}</p>{item.link && <ExternalAnchor href={item.link} className="mt-3 inline-flex items-center gap-1.5 text-sm text-[#a34b2d] hover:text-[#84371e]">Public write-up <ArrowUpRight size={14} /></ExternalAnchor>}</div></article>)}
            </div>
            <p className="mt-5 text-sm text-[#657168]">Also: Academic Instructor, Texas A&amp;M Cohort in Hardware Security · Security Engineering, TAMU Cybersecurity Center · Director, idekCTF.</p>
          </section>

          <section id="about" className="scroll-mt-24 pb-24" aria-labelledby="about-title">
            <SectionHeading eyebrow="03 / BACKGROUND" title="A hardware-first, systems-wide perspective" />
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <p className="text-base leading-8 text-[#46544b]">I study computer engineering at <strong className="font-medium text-[#1c2923]">Texas A&amp;M University</strong>, with minors in mathematics and cybersecurity. My interests center on processor microarchitecture, formal and functional ASIC verification, FPGA systems, and trustworthy embedded software.</p>
                <p className="mt-4 text-base leading-8 text-[#58645c]">I enjoy work that connects RTL, operating systems, and the application above them. Outside of research, I&apos;ve organized security competitions and built tools used by other engineers and students.</p>
                <div className="mt-7 flex flex-wrap gap-5 text-sm"><ExternalAnchor href={authorData.linkedin} className="inline-flex items-center gap-2 text-[#29362e] hover:text-[#84371e]"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></ExternalAnchor><ExternalAnchor href={authorData.blog} className="inline-flex items-center gap-2 text-[#29362e] hover:text-[#84371e]"><ExternalLink size={17} /> Technical writing <ArrowUpRight size={14} /></ExternalAnchor></div>
              </div>
              <div className="space-y-0 divide-y divide-[#ded8cd] rounded-xl border border-[#ded8cd] bg-[#fffdfa]/85 px-6">
                {skills.map((skill) => <div key={skill.label} className="grid gap-2 py-4 sm:grid-cols-[110px_1fr]"><span className="font-mono text-xs uppercase tracking-wider text-[#a34b2d]">{skill.label}</span><span className="text-sm leading-6 text-[#46544b]">{skill.value}</span></div>)}
              </div>
            </div>
          </section>

          <section className="mb-20 rounded-xl border border-[#a34b2d]/30 bg-[#a34b2d]/[0.07] px-7 py-9 sm:px-10 sm:py-12">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div><Eyebrow>CONTACT</Eyebrow><h2 className="mt-3 text-2xl font-semibold text-[#1c2923] sm:text-3xl">Interested in working together?</h2><p className="mt-3 max-w-xl text-sm leading-6 text-[#58645c]">I&apos;m interested in challenging hardware design, verification, FPGA, and embedded systems problems.</p></div>
              <a href={`mailto:${authorData.mail}`} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#a34b2d] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#84371e]">Get in touch <ArrowUpRight size={18} /></a>
            </div>
          </section>
        </main>
        <footer className="flex flex-col justify-between gap-4 border-t border-[#ded8cd] py-7 text-xs text-[#657168] sm:flex-row"><p>© {new Date().getFullYear()} Jayden Koh · Built with Next.js</p><p>Personal projects and public research only. Confidential project details intentionally omitted.</p></footer>
      </div>
    </div>
  );
}
