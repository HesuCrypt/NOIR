import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Work />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;