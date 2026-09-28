import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Toolkit from "./components/Toolkit";
import Skills from "./components/Skills";
import Workflow from "./components/Workflow";
import WhyMe from "./components/WhyMe";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent-500 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Services />
        <Toolkit />
        <Skills />
        <Workflow />
        <WhyMe />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
