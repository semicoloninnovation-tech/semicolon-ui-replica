import { Link } from "react-router-dom";
import { useState } from "react";
import HeroGlow from "../common/HeroGlow";
function PortfolioHero() {

return(

<section className="pt-44 pb-28 relative overflow-hidden">
      <HeroGlow />

<div className="pointer-events-none absolute inset-0 glow-pulse bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,85,255,.14),transparent_45%)]" />


<div className="max-w-7xl mx-auto px-5 relative z-10">


<div className="max-w-4xl mx-auto text-center">


<p className="
inline-flex
gap-2
items-center
px-4
py-2
rounded-full
bg-blue-500/10
border
border-blue-500/30
text-blue-400
uppercase
tracking-[0.15em]
text-xs">

<span>2025</span>

<span>Explore Our Portfolio</span>

</p>


<h1 className="mt-8 text-5xl md:text-7xl font-bold">

<span className="block">

Empowering Digital Visions

</span>

<span className="block text-white/45">

Through Innovation

</span>

</h1>


<p className="mt-6 text-zinc-400 text-lg max-w-3xl mx-auto">

Explore our curated selection of successful projects,
showcasing our expertise in software development,
mobile and web applications,
and IT training.


</p>



<div className="mt-10">


<Link
to="/contact"

className="
inline-flex
px-6
py-3
rounded-xl
font-semibold
text-white
bg-gradient-to-r
from-[#0055ff]
to-[#3a7cff]
shadow-[0_18px_38px_rgba(0,85,255,0.28)]
">

Build Your Product

</Link>


</div>


</div>


</div>


</section>

)

}


export default PortfolioHero;