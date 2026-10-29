import { ArrowUpRight, Code2, GraduationCap, Smartphone, Waypoints } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { services } from "../data/siteContent.js";

const icons = {
  web: Code2,
  app: Smartphone,
  training: GraduationCap,
  consulting: Waypoints,
};

export default function ServicesSection() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="services__heading">
          <SectionHeading
            eyebrow="What we do"
            title={<>From first sketch<br />to <span className="gradient-text">what&apos;s next.</span></>}
            description="One thoughtful team for your digital product, your business, and your next generation of builders."
          />
          <p className="services__side-note">Practical thinking.<br />Beautifully built.</p>
        </div>
        <div className="services__grid">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <article className="service-card" key={service.number}>
                <div className="service-card__top">
                  <span className="service-card__number">{service.number}</span>
                  <span className="service-card__icon"><Icon size={20} strokeWidth={1.8} /></span>
                </div>
                <h3>{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
                <div className="service-card__tags">
                  {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a className="service-card__link" href="#contact" aria-label={`Discuss ${service.title}`}>
                  <ArrowUpRight size={18} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
