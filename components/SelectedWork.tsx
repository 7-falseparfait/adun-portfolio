import Container from "./Container";
import { Button } from "./ui/button";
import SectionHeading from "./ui/SectionHeading";
import SectionLabel from "./ui/SectionLabel";
import WorkFilters from "./ui/WorkFilters";
import VideoCard from "./VideoCard";

const SelectedWork = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "Project explanation...",
      tag: "Talking Head",
    },
    {
      id: 2,
      title: "Project One",
      description: "Project explanation...",
      tag: "Social Media Edit",
    },
    {
      id: 3,
      title: "Project One",
      description: "Project explanation...",
      tag: "Event & Lifestyle",
    },
    {
      id: 4,
      title: "Project One",
      description: "Project explanation...",
      tag: "Brand & Business",
    },
  ];

  return (
    <section className="w-full py-15 bg-background">
      <Container>
        <SectionLabel className="flex items-center justify-center" />
        <SectionHeading className="md:max-w-[450px] mt-3" />
        <WorkFilters />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-22 gap-y-10 md:mt-6">
          {projects.map((project) => (
            <VideoCard
              key={project.id}
              title={project.title}
              tag={project.tag}
            />
          ))}
        </div>

        <div className="w-full mt-16 flex justify-center">
          <Button className="w-full md:w-auto md:px-12 md:py-[30px] rounded-4xl cursor-pointer bg-white text-black hover:bg-neutral-200 py-7 px-9 md:text-base font-medium">
            View all work
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default SelectedWork;
