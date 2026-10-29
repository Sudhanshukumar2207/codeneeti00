import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";

export default function ContactSection() {
  return (
    <section className="section contact" id="contact">
      <div className="contact__glow" aria-hidden="true" />
      <div className="container contact__inner">
        <div className="contact__main">
          <SectionHeading
            eyebrow="Your move"
            title={<>Let&apos;s make<br /><span className="gradient-text">something matter.</span></>}
            description="Have a project in mind, want to learn a new skill, or just figuring out what’s possible? We’d love to hear from you."
          />
          <a className="button button--primary contact__cta" href="mailto:info@codeneeti.com">
            Tell us what you&apos;re thinking <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="contact__details">
          <a className="contact-item" href="mailto:info@codeneeti.com">
            <span className="contact-item__icon"><Mail size={18} /></span>
            <span><small>DROP US A LINE</small><strong>info@codeneeti.com</strong></span>
            <ArrowUpRight className="contact-item__arrow" size={17} />
          </a>
          <a className="contact-item" href="tel:+919661542794">
            <span className="contact-item__icon"><Phone size={18} /></span>
            <span><small>GIVE US A CALL</small><strong>+91 96615 42794</strong></span>
            <ArrowUpRight className="contact-item__arrow" size={17} />
          </a>
          <div className="contact-item contact-item--location">
            <span className="contact-item__icon"><MapPin size={18} /></span>
            <span><small>FIND OUR HOME BASE</small><strong>Rajapur Pull, Patna, India</strong></span>
          </div>
          <p className="contact__note">Usually reply within one working day <span>↗</span></p>
        </div>
      </div>
    </section>
  );
}
