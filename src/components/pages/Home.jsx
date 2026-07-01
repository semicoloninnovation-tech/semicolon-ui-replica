import Hero from "../home/Hero";
import SEO from '../common/SEO'
import About from "../home/About";
import Journey from "../home/Journey";
import Services from "../home/Services";
import Portfolio from "../home/Portfolio";
import Careers from "../home/Careers";
import Testimonials from "../home/Testimonials";
import FAQ from "../home/FAQ";
import CTA from "../home/CTA";

function Home() {
  return (
    <>
      <SEO
  title="Semicolon Innovations | Software Development, AI & IT Training Company in Kerala"
  canonical="/"
  description="Semicolon Innovations is a leading software development and IT training company in Kerala, offering web development, mobile app development, AI solutions, UI/UX design, digital marketing, and industry-focused tech training."
  keywords="software development company Kerala, IT company Kerala, web development Kerala, mobile app development Kerala, AI solutions Kerala, digital marketing Kerala, UI UX design Kerala, IT training Kerala, MERN Stack training, Semicolon Innovations"
/>

      <Hero />
      <About />
      <Journey />
      <Services />
      <Portfolio />
      <Careers />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}

export default Home;