import Footer from "@/components/module/Footer/Footer";
import Navbar from "@/components/module/Navbar/Navbar";
import AboutPage from "@/components/template/AboutPage/AboutPage";
import FollowUs from "@/components/template/FollowUs/FollowUs";
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
      <FollowUs/>
      <Footer/>
    </div>
  );
}
