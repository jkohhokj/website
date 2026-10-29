import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jkoh.dev"),
  title: "Jayden Koh | ASIC Verification, RISC-V & FPGA",
  description:
    "Jayden Koh is a Texas A&M computer engineering student working on formal and functional ASIC verification, RISC-V fuzzing, FPGA design, and embedded systems.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.jkoh.dev",
    title: "Jayden Koh | Hardware & Systems Engineering",
    description: "ASIC Verification · RISC-V · FPGA · Embedded Systems",
    siteName: "Jayden Koh",
  },
  twitter: { card: "summary", title: "Jayden Koh | Hardware & Systems Engineering" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[#f8f5ee] text-[#29362e] antialiased`}>
        {children}
      </body>
    </html>
  );
}

