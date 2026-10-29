import { ArrowUpRight, MoveUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { projects } from "../data/siteContent.js";

function ProjectVisual({ visual }) {
  if (visual === "commerce") {
    return (
      <div className="mockup mockup--commerce" aria-hidden="true">
        <div className="mockup__nav"><span className="mockup__brand">form&field</span><span>Objects for living</span><span>Bag (0)</span></div>
        <div className="mockup__hero">
          <span className="mockup__kicker">THE EVERYDAY COLLECTION</span>
          <span className="mockup__title">Find your<br />kind of calm.</span>
          <span className="mockup__link">Explore collection <MoveUpRight size={13} /></span>
        </div>
        <div className="mockup__product mockup__product--one" />
        <div className="mockup__product mockup__product--two" />
        <div className="mockup__product mockup__product--three" />
      </div>
    );
  }

  return (
    <div className="mockup mockup--mobile" aria-hidden="true">
      <div className="phone">
        <div className="phone__notch" />
        <div className="phone__header"><span>goodday</span><span>•••</span></div>
        <div className="phone__greeting">Make room<br />for <em>good things.</em></div>
        <div className="phone__sun" />
        <div className="phone__task"><span>✦</span><div><b>A little focus</b><small>Your daily reset</small></div><span>›</span></div>
        <div className="phone__nav"><i>⌂</i><i>◷</i><i>♡</i><i>⌘</i></div>
      </div>
      <div className="mobile-orbit mobile-orbit--one" />
      <div className="mobile-orbit mobile-orbit--two" />
      <span className="mobile-sticker">A calmer<br />kind of app</span>
    </div>
  );
}

export default function WorkSection() {
  return (
    <section className="section work" id="work">
      <div className="container">
        <div className="work__heading">
          <SectionHeading
            eyebrow="A glimpse of what's possible"
            title={<>Good ideas, <span className="gradient-text">made real.</span></>}
            description="Every project starts with a conversation and ends with something people love to use."
          />
          <a className="text-link work__all-link" href="#contact">
            Have an idea? Tell us <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="work__grid">
          {projects.map((project) => (
            <article className={`project-card ${project.theme}`} key={project.number}>
              <ProjectVisual visual={project.visual} />
              <div className="project-card__details">
                <div>
                  <p className="project-card__category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-card__description">{project.description}</p>
                </div>
                <span className="project-card__number">{project.number}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
