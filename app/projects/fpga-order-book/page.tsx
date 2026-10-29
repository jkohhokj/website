import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github, Mail } from "lucide-react";
import { authorData } from "@/data/authorData";

export const metadata: Metadata = {
  title: "FPGA Order Book Engine | Jayden Koh",
  description: "An independent FPGA order book prototype, covering RTL architecture, implementation tradeoffs, and verification plans.",
  alternates: { canonical: "/projects/fpga-order-book" },
};

const modules = [
  { name: "order_gen", detail: "Produces test traffic to exercise the datapath without a live market feed." },
  { name: "bbo_tracker", detail: "Tracks best-bid and best-offer state in RTL." },
  { name: "lat_profiler", detail: "Measures internal processing latency across the monitored path." },
  { name: "uart_tx / ILA", detail: "Exports results and supports on-chip signal inspection during development." },
];

export default function OrderBookCaseStudy() {
  return (
    <div className="min-h-screen bg-[#f8f5ee] text-[#29362e] selection:bg-[#e9c8af]">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <header className="flex items-center justify-between border-b border-[#ded8cd] py-6 text-sm">
          <Link href="/" className="font-mono font-semibold tracking-wide text-[#1c2923] hover:text-[#84371e]">JAYDEN KOH<span className="text-[#a34b2d]"> /</span></Link>
          <Link href="/#work" className="inline-flex items-center gap-2 text-[#58645c] hover:text-[#1c2923]"><ArrowLeft size={16} /> All work</Link>
        </header>
        <main className="pb-24 pt-16 sm:pt-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#a34b2d]">Independent hardware project / Design case study</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#1c2923] sm:text-6xl">Low-latency FPGA order book engine</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#46544b]">An RTL experiment in tracking top-of-book state on an FPGA development board, with hardware-driven traffic generation and on-chip debug tooling.</p>

          <section aria-label="Project components" className="mt-11 grid gap-px overflow-hidden rounded-xl border border-[#ded8cd] bg-[#e7e0d4] sm:grid-cols-3">
            {[["FPGA", "Target platform"], ["X MHz", "Clock target"], ["X%", "LUT utilization"]].map(([metric,label]) => <div key={label} className="bg-[#fffdfa] px-5 py-6"><p className="text-xl font-semibold text-[#1c2923] sm:text-2xl">{metric}</p><p className="mt-2 text-sm text-[#58645c]">{label}</p></div>)}
          </section>
          <p className="mt-3 text-xs leading-5 text-[#657168]">Quantitative implementation figures are intentionally displayed as placeholders.</p>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold text-[#1c2923]">Problem and scope</h2>
            <p className="mt-5 leading-8 text-[#46544b]">Market data processing benefits from predictable hardware behavior. The aim of this project was to implement a small, instrumented RTL order-book core instead of relying exclusively on a CPU-hosted software pipeline. It is a proof of concept for exploring FPGA architecture and implementation tradeoffs—not a complete exchange feed handler or matching engine.</p>
          </section>
          <section className="mt-14">
            <h2 className="text-2xl font-semibold text-[#1c2923]">Architecture</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-4">
              {modules.map((m) => <div key={m.name} className="relative rounded-lg border border-[#a34b2d]/25 bg-[#fffdfa] p-4"><p className="font-mono text-xs uppercase tracking-widest text-[#a34b2d]">Component</p><p className="mt-3 break-words font-mono text-sm font-semibold text-[#1c2923]">{m.name}</p><p className="mt-3 text-xs leading-5 text-[#58645c]">{m.detail}</p></div>)}
            </div>
            <p className="mt-4 text-xs text-[#657168]">Functional module overview, not a cycle-accurate block diagram.</p>
          </section>
          <section className="mt-14">
            <h2 className="text-2xl font-semibold text-[#1c2923]">Implementation and measurement</h2>
            <div className="mt-6 space-y-5">
              <div className="border-l-2 border-[#a34b2d]/50 pl-5"><h3 className="font-semibold text-[#1c2923]">Timing</h3><p className="mt-2 text-sm leading-7 text-[#58645c]">A generated clock drives the target RTL. Timing closure and functional correctness require separate checks; a target clock frequency alone does not establish system-level performance.</p></div>
              <div className="border-l-2 border-[#a34b2d]/50 pl-5"><h3 className="font-semibold text-[#1c2923]">Resource footprint</h3><p className="mt-2 text-sm leading-7 text-[#58645c]">LUT utilization is tracked after synthesis and implementation. Numerical results are withheld here until they can be published with the corresponding build configuration and reports.</p></div>
              <div className="border-l-2 border-[#a34b2d]/50 pl-5"><h3 className="font-semibold text-[#1c2923]">Observability</h3><p className="mt-2 text-sm leading-7 text-[#58645c]">UART telemetry and integrated logic-analyzer instrumentation support on-chip inspection and functional debugging of the order-book core.</p></div>
            </div>
          </section>
          <section className="mt-14 rounded-xl border border-[#d8b87a]/50 bg-[#fff6e8] p-7">
            <h2 className="text-xl font-semibold text-[#1c2923]">Prototype boundaries</h2>
            <p className="mt-4 text-sm leading-7 text-[#46544b]">This is a standalone RTL prototype, not a production trading system. It does not implement a complete exchange protocol, networking stack, or live-feed integration.</p>
            <p className="mt-3 text-sm leading-7 text-[#58645c]">Public reproducibility will require a buildable RTL repository, test vectors, reference-model checks, and implementation reports tied to a documented configuration.</p>
          </section>
          <section className="mt-14">
            <h2 className="text-2xl font-semibold text-[#1c2923]">Next engineering steps</h2>
            <ol className="mt-5 list-inside list-decimal space-y-3 text-sm leading-7 text-[#46544b]"><li>Add deterministic, replayable order sequences and reference-model checks.</li><li>Publish timing constraints and resource-utilization reports with the tested configuration.</li><li>Extend the datapath toward book-derived signals such as order-flow imbalance and VWAP.</li><li>Publish a reproducible RTL repository and build instructions once ready.</li></ol>
            <p className="mt-5 text-sm text-[#657168]">Code is not linked here because a verified public repository for this specific project has not been provided.</p>
          </section>
          <div className="mt-16 flex flex-wrap gap-3 border-t border-[#ded8cd] pt-8"><Link href="/#work" className="inline-flex items-center gap-2 rounded-lg border border-[#c9c0b2] px-5 py-3 text-sm font-medium text-[#1c2923] hover:border-[#a34b2d]"><ArrowLeft size={16}/> Back to work</Link><a href={authorData.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-[#c9c0b2] px-5 py-3 text-sm text-[#1c2923] hover:border-[#a34b2d]"><Github size={16}/> GitHub profile <ArrowUpRight size={14}/></a><a href={`mailto:${authorData.mail}`} className="inline-flex items-center gap-2 rounded-lg bg-[#a34b2d] px-5 py-3 text-sm font-semibold text-white hover:bg-[#84371e]"><Mail size={16}/> Contact</a></div>
        </main>
        <footer className="border-t border-[#ded8cd] py-7 text-xs text-[#657168]">© {new Date().getFullYear()} Jayden Koh · Personal, non-confidential project</footer>
      </div>
    </div>
  );
}
