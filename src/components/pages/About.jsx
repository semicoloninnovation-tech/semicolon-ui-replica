import { Link } from "react-router-dom";
import SEO from '../common/SEO'
import laptop from "../../assets/media/home-man-laptop.png";
import HeroGlow from "../common/HeroGlow";

function About() {
  return (
    <>
      <SEO
        title='About Us'
        canonical='/about'
        description='Learn about Semicolon Innovations – our mission, team, and vision to deliver world-class IT solutions and industry-focused tech training from Kerala.'
        keywords='about Semicolon Innovations, IT company Kerala, tech training center Kerala'
      />

      <section className="pt-36 pb-24 relative overflow-hidden">
        <HeroGlow/>

        <div className="pointer-events-none absolute inset-0 glow-pulse bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,85,255,.14),transparent_45%)]" />

        <div className="max-w-7xl mx-auto px-5 text-center relative z-10">

          <p className="uppercase tracking-[4px] text-blue-400 text-sm flex gap-3 justify-center">
            <span>2025</span>
            <span>Dig Deep About Us</span>
          </p>

          <h1 className="mt-5 text-5xl md:text-7xl font-bold">
            Shaping Digital Futures

            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">

              with Expertise & Passion

            </span>

          </h1>


          <p className="mt-6 text-zinc-400 max-w-3xl mx-auto">

            Discover how we blend software craftsmanship and
            future-ready training to transform businesses and
            empower learners.

          </p>



          <div className="mt-10 flex gap-4 justify-center">

            <Link
            to="/contact"
            className="bg-white text-black px-7 py-3 rounded-xl">

              Connect With Us

            </Link>


            <Link
            to="/enrollment"
            className="border border-white/10 bg-white/5 px-7 py-3 rounded-xl">

              Enroll Now

            </Link>

          </div>

        </div>

      </section>



      <section className="py-20 relative overflow-hidden">

        <div className="pointer-events-none absolute inset-0 glow-pulse bg-[radial-gradient(ellipse_at_0%_60%,rgba(0,85,255,.10),transparent_40%)]" />

        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-10">

          <div>

            <img
            src={laptop}
            className="rounded-3xl h-full object-cover"
            />

          </div>


          <div>

            <p className="uppercase tracking-[4px] text-blue-400">

              About

            </p>


            <h2 className="text-5xl font-bold mt-4">

              Revolutionary Minds


              <span className="block text-blue-400">

                Timeless Craft!

              </span>


            </h2>



            <div className="w-20 h-[2px] bg-blue-500 my-8"/>



            <h3 className="text-2xl font-semibold">

              Your Success, Our Priority

            </h3>


            <p className="mt-4 text-zinc-400">

              We empower businesses and individuals through
              expert IT solutions...

            </p>




            <h3 className="text-2xl font-semibold mt-8">

              Partners You Can Rely On

            </h3>



            <p className="mt-4 text-zinc-400">

              We build lasting relationships through trust,
              innovation, and performance.

            </p>



          </div>

        </div>

      </section>

    </>
  );
}

export default About;