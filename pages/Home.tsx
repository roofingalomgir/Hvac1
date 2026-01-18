
import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Services from '../components/Services';
import ProjectsGrid from '../components/ProjectsGrid';
import Process from '../components/Process';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Services />
      <ProjectsGrid />
      <Process />
      <FAQ />
      <Testimonials />
      <ContactForm />
    </>
  );
};

export default Home;
