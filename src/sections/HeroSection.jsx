import { ArrowDown, ArrowUpRight, Braces, Code2, Sparkles } from "lucide-react";
import { stats } from "../data/siteContent.js";

function ProductPreview() {
  return (
    <div className="hero-visual" aria-label="CodeNeeti digital product preview">
      <div className="hero-visual__glow" />
      <div className="orbit orbit--one" />
      <div className="orbit orbit--two" />
      <div className="hero-card">
        <div className="hero-card__top">
          <div className="window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <span>your-next-idea.dev</span>
          <Braces size={16} aria-hidden="true" />
        </div>
        <div className="hero-card__body">
          <div className="hero-card__copy">
            <span className="mini-label">BUILT FOR WHAT&apos;S NEXT</span>
            <p>Good ideas deserve</p>
            <p className="gradient-text">great digital homes.</p>
            <span className="preview-button">Let&apos;s make it real <ArrowUpRight size={13} /></span>
          </div>
          <div className="preview-art" aria-hidden="true">
            <span className="preview-art__sun" />
            <span className="preview-art__shape preview-art__shape--one" />
            <span className="preview-art__shape preview-art__shape--two" />
            <span className="preview-art__shape preview-art__shape--three" />
          </div>
        </div>
        <div className="hero-card__bottom">
          <span><i className="status-dot" /> Design meets development</span>
          <span>01 — 04</span>
        </div>
      </div>
      <div className="floating-chip floating-chip--code"><Code2 size={16} /> Clean code</div>
      <div className="floating-chip floating-chip--spark"><Sparkles size={16} /> Made for people</div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero__grid" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow">
            <span className="eyebrow__spark"><Sparkles size={13} /></span>
            DIGITAL STUDIO · PATNA, INDIA
          </p>
          <h1>
            We build digital
            <span className="hero__headline-accent"> things that</span>
            <span>move you forward.</span>
          </h1>
          <p className="hero__description">
            Thoughtful websites, mobile apps, and hands-on tech training — made to help
            people and businesses take their next step.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#contact">
              Start a project <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="text-link" href="#services">
              Explore what we do <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="hero__trust">
            <div className="avatar-stack" aria-hidden="true">
              <span>CN</span><span>✦</span><span>IN</span>
            </div>
            <p><strong>A small team with big ideas</strong><span>Creating better digital, together.</span></p>
          </div>
        </div>
        <ProductPreview />
      </div>
      <div className="container hero__stats" aria-label="CodeNeeti at a glance">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
        <span className="hero__stats-note">A little progress, every day.</span>
      </div>
    </section>
  );
}
