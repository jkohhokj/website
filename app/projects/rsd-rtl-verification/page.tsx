import type { Metadata } from "next"; import Link from "next/link"; import { ArrowLeft, ArrowUpRight, ExternalLink, FileText, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "RSD RISC-V RTL Verification Findings | Jayden Koh",
  description:
    "Technical overview of six reported RTL verification findings in the RSD out-of-order RISC-V processor, including floating-point architectural state and CSR privilege checking.",
};

const reportsRepositoryUrl = "https://github.com/jkohhokj/riscv-rtl-verification";

const findings = [
  {
    id: "RSD 1.1",
    title: "Disabled floating-point access",
    expectation: "Operations requiring FP state should trap when architectural FP access is disabled.",
    observation: "The documented test proceeded without the expected illegal-instruction exception.",
  },
  {
    id: "RSD 1.2",
    title: "Floating-point dirty-state tracking",
    expectation: "Modifying FP register state should update the relevant architectural context status.",
    observation: "The report records FP state changes without the expected FS status update.",
  },
  {
    id: "RSD 1.3",
    title: "Aggregate dirty-state reporting",
    expectation: "The aggregate SD indicator should reflect dirty extension state.",
    observation: "The indicator remained clear under the reported test conditions.",
  },
  {
    id: "RSD 1.4",
    title: "Read-only status-bit handling",
    expectation: "Architecturally read-only status bits should not be directly modified by software writes.",
    observation: "The report documents an unexpected change to the SD status bit.",
  },
  {
    id: "RSD 2.1",
    title: "User-mode access to machine CSRs",
    expectation: "Access to machine-only CSRs from user mode should raise an illegal-instruction exception.",
    observation: "The supplied simulation traces show disallowed CSR access proceeding without the expected exception.",
  },
  {
    id: "RSD 2.2",
    title: "Writes to read-only CSRs",
    expectation: "Illegal writes to read-only CSRs should be rejected with the architecturally required exception.",
    observation: "The report records attempts that did not trigger the expected trap.",
  },
];

export default function RsdVerificationPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ee] text-[#29362e]">
      <div className="mx-auto max-w-5xl px-5 pb-24 pt-10 sm:px-8">
        <nav aria-label="Breadcrumb" className="mb-14">
          <Link href="/#work" className="inline-flex items-center gap-2 text-sm font-medium text-[#a34b2d] hover:text-[#84371e]">
            <ArrowLeft size={16} /> Back to selected work
          </Link>
        </nav>

        <header className="max-w-4xl border-b border-[#ded8cd] pb-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#a34b2d]">Research case study / RISC-V verification</p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#1c2923] sm:text-6xl">
            Investigating ISA-conformance failures in RSD
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#46544b]">
            Six documented findings from collaborative RTL security-verification research on
            the open-source RSD out-of-order RISC-V processor at Texas A&amp;M&apos;s SETH Lab.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            {reportsRepositoryUrl && (
              <a href={reportsRepositoryUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#a34b2d] hover:text-[#84371e]">
                <FileText size={16} /> Read published reports <ArrowUpRight size={16} />
              </a>
            )}
            <a href="https://hardware-fuzz.jkoh.dev/blog/summer25_jayden" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#a34b2d] hover:text-[#84371e]">
              Public research write-up <ExternalLink size={16} />
            </a>
            <a href="https://github.com/rsd-devel/rsd" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#a34b2d] hover:text-[#84371e]">
              <Github size={16} /> RSD processor source <ArrowUpRight size={16} />
            </a>
          </div>
        </header>

        <section className="grid gap-4 border-b border-[#ded8cd] py-12 sm:grid-cols-3" aria-label="Research scope">
          <div className="rounded-xl border border-[#ded8cd] bg-[#fffdfa] p-6"><p className="text-4xl font-semibold text-[#1c2923]">6</p><p className="mt-2 text-sm text-[#58645c]">Documented findings</p></div>
          <div className="rounded-xl border border-[#ded8cd] bg-[#fffdfa] p-6"><p className="text-4xl font-semibold text-[#1c2923]">2</p><p className="mt-2 text-sm text-[#58645c]">Architectural failure categories</p></div>
          <div className="rounded-xl border border-[#ded8cd] bg-[#fffdfa] p-6"><p className="font-mono text-lg font-medium text-[#1c2923]">7b65f6b</p><p className="mt-2 text-sm text-[#58645c]">Historical RSD commit referenced by reports</p></div>
        </section>

        <section className="py-12">
          <h2 className="text-2xl font-semibold text-[#1c2923]">Verification approach</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#58645c]">
            Translated RISC-V privileged-ISA requirements into targeted tests, simulated
            architectural behavior in the RTL processor, and compared expected exceptions
            and state transitions against trace and waveform evidence. Findings were
            documented collaboratively with a description of the mismatch, affected
            architectural behavior, and the simulation context.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-4">
            {[
              ["01", "ISA requirement"],
              ["02", "Targeted test"],
              ["03", "RTL trace review"],
              ["04", "Technical finding"],
            ].map(([step, label]) => (
              <div key={step} className="rounded-lg border border-[#ded8cd] bg-[#fffdfa] p-4">
                <p className="font-mono text-xs text-[#a34b2d]">{step}</p>
                <p className="mt-2 text-sm font-medium text-[#1c2923]">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-[#ded8cd] py-12" aria-labelledby="findings-heading">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#a34b2d]">RTL evidence</p>
              <h2 id="findings-heading" className="mt-2 text-2xl font-semibold text-[#1c2923]">Six reported findings</h2>
            </div>
            <p className="text-sm text-[#657168]">4 FP-state · 2 CSR-access</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {findings.map((finding) => (
              <article key={finding.id} className="rounded-xl border border-[#ded8cd] bg-[#fffdfa] p-6">
                <p className="font-mono text-xs font-medium text-[#a34b2d]">{finding.id}</p>
                <h3 className="mt-3 text-lg font-semibold text-[#1c2923]">{finding.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#58645c]"><strong className="text-[#29362e]">Expected: </strong>{finding.expectation}</p>
                <p className="mt-3 text-sm leading-6 text-[#58645c]"><strong className="text-[#29362e]">Observed: </strong>{finding.observation}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-[#ded8cd] bg-[#fffdfa] p-7 sm:p-9">
          <h2 className="text-xl font-semibold text-[#1c2923]">Research scope and disclosure</h2>
          <p className="mt-3 text-sm leading-7 text-[#58645c]">
            These findings were marked as reported in the research tracker and refer to
            the historical RSD revision above; they do not establish the current upstream
            status, confirmed exploitability, or unique vulnerability identifiers. The
            work was collaborative. In particular, the aggregate dirty-state finding
            overlaps an <a href="https://github.com/rsd-devel/rsd/issues/75" target="_blank" rel="noopener noreferrer" className="underline decoration-[#a34b2d] underline-offset-4 hover:text-[#84371e]">earlier public RSD issue</a>.
            Only cleared, sanitized reports should be linked publicly.
          </p>
          {reportsRepositoryUrl ? (
            <a href={reportsRepositoryUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#a34b2d] hover:text-[#84371e]">
              View published PDF reports <ArrowUpRight size={16} />
            </a>
          ) : (
            <p className="mt-5 font-mono text-xs text-[#657168]">Public report PDFs are not linked on this page until a cleared repository URL is supplied.</p>
          )}
        </section>

        <footer className="mt-16 border-t border-[#ded8cd] pt-6">
          <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-[#a34b2d] hover:text-[#84371e]"><ArrowLeft size={16} /> Return to engineering work</Link>
        </footer>
      </div>
    </main>
  );
}
