import Experience from "@/components/experience";
import PortFolio from "@/components/portfolio";
import Profile from "@/components/profile";
import Skill from "@/components/skill";
import Image from "next/image";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems} /> */}
        <Profile />
        <Experience />
        <Skill />
        <PortFolio />
      </div>
    </main>
  );
}
