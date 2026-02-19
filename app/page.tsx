import Aboutme from "@/components/Aboutme";
import Hero from "@/components/Hero";
import PastProjects from "@/components/PastProjects";
import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";
import ShortsGallery from "@/components/ShortsGallery";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <ShortsGallery />
      <Services />
      <Aboutme />
      <PastProjects />
    </>
  );
}
