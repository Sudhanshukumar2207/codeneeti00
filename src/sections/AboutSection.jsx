import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";

const principles = [
  "Real conversations, clear thinking",
  "Technology chosen for your needs",
  "People-first from day one",
];

export default function AboutSection() {
  return (
    <section className="section about" id="about">
      <div className="container about__inner">
        <div className="about__art" aria-hidden="true">
          <div className="about__orbit about__orbit--outer" />
          <div className="about__orbit about__orbit--inner" />
          <div className="about__spark about__spark--one">✳</div>
          <div className="about__spark about__spark--two">✦</div>
          <div className="about__center-mark"><span>CN</span><small>BUILD WITH INTENTION</small></div>
          <div className="about__note about__note--top">A good idea<br />can start anywhere.</div>
          <div className="about__note about__note--bottom">Curious minds.<br />Useful things.</div>
        </div>
        <div className="about__content">
          <SectionHeading
            eyebrow="A little about us"
            title={<>Small team.<br /><span className="gradient-text">Real impact.</span></>}
            description="We’re CodeNeeti — a Patna-based team of makers, mentors, and curious problem-solvers. We make technology feel less complicated and a lot more human."
          />
          <ul className="principle-list">
            {principles.map((principle) => (
              <li key={principle}><span><Check size={14} /></span>{principle}</li>
            ))}
          </ul>
          <a className="text-link about__link" href="#contact">
            Get to know us <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
      <div className="container about__banner">
        <span><Sparkles size={17} /> GOOD WORK SHOULD FEEL GOOD</span>
        <p>Ideas grow better when we build them <em>together.</em></p>
        <a href="#contact" aria-label="Contact CodeNeeti"><ArrowUpRight size={21} /></a>
      </div>
    </section>
  );
}
