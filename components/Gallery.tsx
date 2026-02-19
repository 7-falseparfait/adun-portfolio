import Container from "./Container";

const Gallery = () => {
  return (
    <section className="mt-6 mb-20">
      <h2 className="font-[family-name:var(--font-crimson)] font-normal text-[32px] md:text-[64px] md:leading-[88px] leading-[38px] tracking-[-0.015em] text-center text-foreground mb-5 md:mb-12">
        Fun Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {/* Reel 1 */}
        <div className="w-full aspect-9/16 md:aspect-4/5 overflow-hidden rounded-2xl border border-white/10 relative bg-[#111]">
          <iframe
            src="https://www.instagram.com/reel/DRUFQnLDAon/embed/"
            className="absolute inset-0 w-full h-full object-cover"
            frameBorder="0"
            scrolling="no"

          ></iframe>
        </div>

        {/* Reel 2 */}
        <div className="w-full aspect-9/16 md:aspect-4/5 overflow-hidden rounded-2xl border border-white/10 relative bg-[#111]">
          <iframe
            src="https://www.instagram.com/reel/DQUuOJWDKJ7/embed/"
            className="absolute inset-0 w-full h-full object-cover"
            frameBorder="0"
            scrolling="no"

          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
