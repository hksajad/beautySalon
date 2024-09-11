import Navbar from "@/components/module/Navbar/Navbar";
import Hero from "@/components/template/HeroPage/Hero";
import Socialcapton from "@/components/template/SocialCaptionHero/Socialcapton";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Hero/>
      <Socialcapton/>
    </div>
  );
}
