import Navbar from "@/components/module/Navbar/Navbar";
import AboutPage from "@/components/template/AboutPage/AboutPage";
import Hero from "@/components/template/HeroPage/Hero";
import Services from "@/components/template/ServicesPage/Services";
import Socialcapton from "@/components/template/SocialCaptionHero/Socialcapton";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Hero/>
      <Socialcapton/>
      <Services/>
      <AboutPage/>
    </div>
  );
}
