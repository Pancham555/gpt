import React from "react";
import { Navbar } from "@/components/component/navbar";
import { About } from "@/components/component/about";
import { Footer } from "@/components/component/footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-950">
      <Navbar />
      <About />
      <Footer />
    </main>
  );
}
