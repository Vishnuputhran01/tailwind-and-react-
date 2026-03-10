import React from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import Mission from './components/sections/Mission';
import TeamSection from './components/sections/TeamSection';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <TeamSection />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
