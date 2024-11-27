import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";

import Lenis from "lenis";
import Navbar from "./components/Navbar";

const App = () => {

  function lenisFn() {
    const lenis = new Lenis({
      wheelMultiplier: 2,
      duration: 1.5,
      easing: (x) => 1 - Math.pow(1 - x, 5),
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
  lenisFn();

  return (
    <>
       <main className="relative min-h-screen w-screen overflow-x-hidden">
          <Navbar/>
          <Hero/>
          <About/>
        </main>
    </>
  );
};

export default App;
