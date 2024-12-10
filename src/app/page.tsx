import Header from "@/components/Header"
import Card from "@/components/Card";
import Running from "@/components/Running";
 import Gear from "@/components/Gear";
 import Stan from "@/components/Stan";
 import Essentials from "@/components/Essentials";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto">
      
      <Hero/>
      <Card />
      <Running />
      <Gear />
      <Stan />
      <Essentials />
    </main>
  );
}
