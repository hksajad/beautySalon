import Footer from "@/components/module/Footer/Footer";
import Header from "@/components/module/Header/Header";
import About from "@/components/template/AboutPage/About";
import Crusel from "@/components/template/Crusel/Crusel";
import Hour from "@/components/template/Hour/Hour";
import OurTeam from "@/components/template/OurTeam/OurTeam";
import Time from "@/components/template/Time/Time";

export default function Home() {
  return (
    <div>
      <Header/>
      <About/>
      <Hour/>
      <OurTeam/>
      <Crusel/>
      <Time/>
      <Footer/>
    </div>
  );
}
