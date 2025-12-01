import { Button } from "./ui/button";
import VideoCard from "./VideoCard";
import VideoPlaceholder from "./VideoPlaceholder";

const SelectedWork = () => {
  // Placeholder projects - easy to replace with real data later
  const projects = [
    {
      id: 1,
      title: "Project One",
      description:
        "Project explanation hyjoshyjoahyjos hyjios hyjioshy joahyjos",
    },
    {
      id: 2,
      title: "Project One",
      description:
        "Project explanation hyjoshyjoahyjos hyjios hyjioshy joahyjos",
    },
    {
      id: 3,
      title: "Project One",
      description:
        "Project explanation hyjoshyjoahyjos hyjios hyjioshy joahyjos",
    },
    {
      id: 4,
      title: "Project One",
      description:
        "Project explanation hyjoshyjoahyjos hyjios hyjioshy joahyjos",
    },
  ];

  return (
    <section className="w-full py-20 bg-background">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
        <h2 className="text-foreground text-[56px] leading-[72px] tracking-[-0.015em] font-[family-name:var(--font-crimson)] font-normal mb-12">
          Selected Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project) => (
            <VideoCard
              key={project.id}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
      <div className="place-self-center mt-9">
        <Button className="rounded-3xl cursor-pointer bg-white text-black hover:bg-neutral-200 py-6 px-9">
          View all work
        </Button>
      </div>
    </section>
  );
};

export default SelectedWork;
