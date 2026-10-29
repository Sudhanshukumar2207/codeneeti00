import Navigation from "./components/Navigation.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import AboutSection from "./sections/AboutSection.jsx";
import ContactSection from "./sections/ContactSection.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import ServicesSection from "./sections/ServicesSection.jsx";
import WorkSection from "./sections/WorkSection.jsx";

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
