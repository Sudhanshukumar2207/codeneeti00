import { ArrowUpRight, Instagram } from "lucide-react";
import BrandMark from "./BrandMark.jsx";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <div>
          <BrandMark />
          <p>Thoughtful digital. Practical learning.<br />Made with care in Patna, India.</p>
        </div>
        <div className="site-footer__links">
          <a href="#services">Services</a>
          <a href="#work">Our work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="https://www.instagram.com/codeneeti1" target="_blank" rel="noreferrer" aria-label="CodeNeeti on Instagram">
            <Instagram size={17} /><ArrowUpRight size={13} />
          </a>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <span>© {new Date().getFullYear()} CodeNeeti. All rights reserved.</span>
        <span>Made with <i>♥</i> in India</span>
      </div>
    </footer>
  );
}
