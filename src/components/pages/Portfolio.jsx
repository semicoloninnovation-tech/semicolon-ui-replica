import PortfolioHero from "./PortfolioHero";
import PortfolioGrid from "./PortfolioGrid";
import FAQ from "../home/FAQ";
import CTA from "../home/CTA";
import SEO from '../common/SEO'

function Portfolio() {
    return (
        <>
            <SEO
              title='Portfolio'
              canonical='/portfolio'
              description="Browse Semicolon Innovations' portfolio of delivered IT projects – from healthcare platforms to SaaS products, all built and launched for real clients."
              keywords='IT portfolio Kerala, software projects Kerala, web app portfolio, Semicolon projects'
            />
            <PortfolioHero />
            <PortfolioGrid />
            <FAQ eyebrow="How We Work?" />
            <CTA
              eyebrow="Join Us Now"
              titleLine1="Each Project we Undertake"
              titleLine2="is a Unique Opportunity."
              text="Ready to take the next step? Join us now and start transforming your vision into reality with expert support."
              buttonLabel="Contact Us"
              buttonTo="/contact"
            />
        </>
    );
}

export default Portfolio;
