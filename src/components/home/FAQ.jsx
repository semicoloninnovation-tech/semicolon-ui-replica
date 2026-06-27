import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../common/Reveal";

const faqs = [
  {
    question: "What services does your firm offer?",
    answer:
      "We offer custom software development, web and mobile application development, IT consulting, automation solutions, training programs, internships, certifications, and career support.",
  },

  {
    question:
      "Do you provide customized software solutions for businesses?",
    answer:
      "Yes. Our solutions are tailored to business objectives, technical constraints, operational workflows, and long-term growth goals instead of relying on generic templates.",
  },

  {
    question:
      "Which technologies do you use for development?",
    answer:
      "HTML, CSS, JavaScript, React, PHP, Laravel, Node.js, Flutter, React Native, AWS, Azure, GCP, Docker, Kubernetes, APIs, databases and deployment tooling.",
  },

  {
    question:
      "Do you build apps for both Android and iOS platforms?",
    answer:
      "Yes. We work on native Android and iOS apps as well as cross-platform solutions using Flutter and React Native.",
  },

  {
    question:
      "Can I consult your team for my existing IT infrastructure challenges?",
    answer:
      "Yes. Our consulting covers technology strategy, infrastructure planning, workflow automation and process optimization.",
  },

  {
    question:
      "What kind of training programs do you offer?",
    answer:
      "Programming, web development, AI, Data Science, Robotics, Cloud Computing and DevOps.",
  },

  {
    question:
      "Are your training programs certification-based?",
    answer:
      "Yes. We provide completion certificates and attestation support where applicable.",
  },

  {
    question:
      "Do you provide placement assistance after training?",
    answer:
      "Yes. Resume building, LinkedIn optimization, mock interviews and referrals are included.",
  },

  {
    question:
      "What industries have you worked with in your projects?",
    answer:
      "Healthcare, Finance, eCommerce, Internal Operations and Business Systems.",
  },

  {
    question:
      "How can I get started with your services?",
    answer:
      "Reach out through the contact page, share your goals and we'll guide you through the next steps.",
  },
];



function FAQ({ compact = true, eyebrow = "FAQ" }) {

const [active,setActive]=useState(null);


const toggleFAQ=(index)=>{

setActive(active===index ? null : index)

}



return (

<section className="py-28">

<div className="max-w-7xl mx-auto px-5">



{/* Hero */}

{compact ? (

<Reveal className="max-w-2xl mx-auto text-center mb-14">

<p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-[#dce7ff] text-[0.84rem] tracking-[0.12em] uppercase">

{eyebrow}

</p>

<h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">

Frequently{" "}

<span className="bg-gradient-to-b from-white via-[#e8efff] to-[#90b0ff] bg-clip-text text-transparent">

Asked Questions

</span>

</h2>

<p className="mt-4 text-[#a6aec3] leading-relaxed">

Have questions? Our FAQ section has you covered with quick answers to the most common inquiries.

</p>

</Reveal>

) : (

<Reveal className="grid lg:grid-cols-2 gap-10 mb-20">


<div>


<p
className="
inline-flex
items-center
gap-2
px-4
py-2
rounded-full
text-xs
uppercase
tracking-[0.15em]
border
border-blue-500/30
bg-blue-500/10
text-blue-400
"
>

Frequently Asked Questions

</p>



<h1 className="mt-6 text-5xl font-bold">

Quick answers to the most common inquiries.

</h1>


<p className="mt-5 text-zinc-400">

This page keeps the current Semicolon question set and
translates it into a clean local FAQ flow.

</p>

</div>




<div
className="
rounded-[32px]
border
border-white/10
bg-[linear-gradient(180deg,rgba(15,18,27,0.94),rgba(8,10,15,0.98))]
p-8
"
>



<h3 className="text-2xl font-semibold">

What this covers

</h3>


<p className="mt-4 text-zinc-400">

Services, project delivery,
training tracks,
certifications,
placements,
and getting started.

</p>



<div className="mt-8 flex gap-3 flex-wrap">


<span className="px-4 py-2 rounded-full bg-zinc-800">

Services

</span>


<span className="px-4 py-2 rounded-full bg-zinc-800">

Training

</span>



<span className="px-4 py-2 rounded-full bg-zinc-800">

Careers

</span>



</div>



</div>



</Reveal>

)}





{/* FAQ */}



<div className="space-y-5">


{

faqs.map((faq,index)=>(



<div

key={index}

className="
rounded-3xl
border
border-white/10
bg-white/[0.02]
overflow-hidden
"


>



<button


onClick={()=>toggleFAQ(index)}



className="
w-full
flex
justify-between
items-center
p-6
text-left
"

>


<span className="font-semibold">

{faq.question}

</span>


<div
className="
w-10
h-10
rounded-full
bg-zinc-800
flex
items-center
justify-center
"
>

{

active===index ?

<Minus size={18}/>

:

<Plus size={18}/>

}


</div>


</button>



{

active===index && (


<div className="px-6 pb-6">

<p className="text-zinc-400">

{faq.answer}

</p>

</div>

)

}



</div>



))

}



</div>




{/* CTA */}

{!compact && (
<div
className="
mt-24
rounded-[32px]
border
border-white/10
bg-[linear-gradient(180deg,rgba(15,18,27,0.94),rgba(8,10,15,0.98))]
p-12
text-center
"
>


<p
className="
inline-flex
px-4
py-2
rounded-full
bg-blue-500/10
text-blue-400
uppercase
tracking-widest
text-xs
"
>

Need More Clarity?

</p>


<h2 className="mt-6 text-4xl font-bold">

Talk through your project,

training path,

or career questions with us.


</h2>



<p className="mt-5 text-zinc-400 max-w-2xl mx-auto">

We can help you translate questions into a clear next step.


</p>




<div className="mt-10 flex gap-4 justify-center">


<Link

to="/contact"

className="
px-6
py-3
rounded-xl
bg-gradient-to-r
from-[#0055ff]
to-[#3a7cff]
font-semibold
"
>

Contact Us

</Link>



<Link

to="/services"

className="
px-6
py-3
rounded-xl
border
border-white/10
bg-white/5
"
>

Explore Services

</Link>


</div>



</div>
)}


</div>

</section>

)

}

export default FAQ;