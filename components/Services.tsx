import Image from "next/image";
const ServiceCard = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="relative bg-neutral-900/50 rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 group">
      <div className=" opacity-30 pointer-events-none">
        <img src="/Dots.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 p-6 md:p-8">
        <div className="text-muted-foreground text-sm font-inter mb-4 group-hover:text-foreground transition-colors">
          {number}
        </div>

        <h3 className="text-foreground text-2xl md:text-3xl font-[family-name:var(--font-crimson)] font-normal mb-3">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm md:text-base font-inter leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      id: 1,
      number: "01",
      title: "Short Form Editing",
      description:
        "Fast, trendy, and built for TikTok, reels and shorts. Quick cut videos and wonderful stuff.",
    },
    {
      id: 2,
      number: "02",
      title: "Long Form Editing",
      description:
        "Fast, trendy, and built for TikTok, reels and shorts. Quick cut videos and wonderful stuff.",
    },
    {
      id: 3,
      number: "03",
      title: "Commercial",
      description:
        "Fast, trendy, and built for TikTok, reels and shorts. Quick cut videos and wonderful stuff.",
    },
  ];

  return (
    <section className="w-full py-2 bg-background">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center ">
          <Image
            width={120}
            height={120}
            src="/Dots.png"
            alt="dots"
            className="mb-6"
          />
          <h2 className="text-foreground text-[56px] leading-[72px] mb-6 tracking-[-0.015em] font-[family-name:var(--font-crimson)] font-normal text-center">
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              number={service.number}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
