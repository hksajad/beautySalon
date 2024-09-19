import Header from "@/components/module/Header/Header";
import About from "@/components/template/AboutPage/About";
import Hour from "@/components/template/Hour/Hour";
import OurTeam from "@/components/template/OurTeam/OurTeam";

export default function Home() {
  return (
    <div>
      <Header/>
      <About/>
      <Hour/>
      <OurTeam/>
    </div>
  );
}
