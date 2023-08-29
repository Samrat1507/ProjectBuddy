import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <main className="h-screen light-bg px-5 py-5">
      <Navbar />
      <Hero />
    </main>
  );
}
