import PortfolioHero from "./PortfolioHero";
import PortfolioGrid from "./PortfolioGrid";
import FAQ from "../home/FAQ";
import CTA from "../home/CTA";

function Portfolio() {
    return (
        <>
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
