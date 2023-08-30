import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { useState, useEffect } from "react";

export default function Home() {

  useEffect(() => {
    if(!localStorage.getItem("theme"))
      localStorage.setItem("theme", "light");
  }, []);


  return (
    <main className="h-screen light-bg dark:dark-bg px-5 py-5 transition">
      <Navbar />
      <Hero />
    </main>
  );
}
