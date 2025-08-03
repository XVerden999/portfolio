import Snowfall from "@/components/Snowfall";
import About from "@/sections/About";
import Connect from "@/sections/Connect";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Story from "@/sections/MyStory";
import Tech from "@/sections/Tech";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header/>
      <hr style={{color: 'rgba(235, 230, 242, 0.5)'}}/>

      <Hero/>
      <About/>
      <Tech/>
      <Story/>
      <Connect/>

      <hr style={{
        color: 'rgba(235, 230, 242, 0.1)',
        height: 1}}/>
      <Footer/>

      <Snowfall flakeCount={30}/>
    </main>
  );
}
