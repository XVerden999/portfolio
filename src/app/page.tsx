import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>

      <hr style={{color: 'rgba(235, 230, 242, 0.5)'}}/>

      <Hero/>
    </div>
  );
}
