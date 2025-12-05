import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PastProjects from "@/components/PastProjects";
import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Services />
      <PastProjects />
    </>
  );
}
