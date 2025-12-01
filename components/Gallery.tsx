import Image from "next/image";

const Gallery = () => {
  return (
    <section className="mt-6">
      <h2 className="font-[family-name:var(--font-crimson)] font-normal text-[64px] leading-[88px] tracking-[-0.015em] text-center text-foreground mb-12">
        Gallery & Fun projects
      </h2>
      <div className="border border-white/10 overflow-hidden">
        {/* First Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          <Image
            width={300}
            height={464}
            src="/1.jpg"
            alt="image-1"
            className="object-cover w-full h-full"
          />
          <Image
            width={300}
            height={464}
            src="/2.jpg"
            alt="image-2"
            className="object-cover w-full h-full"
          />
          <Image
            width={300}
            height={464}
            src="/3.jpg"
            alt="image-3"
            className="object-cover w-full h-full"
          />
          <Image
            width={300}
            height={464}
            src="/4.jpg"
            alt="image-4"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          <Image
            width={300}
            height={464}
            src="/5.png"
            alt="image-5"
            className="object-cover w-full h-full"
          />
          <Image
            width={300}
            height={464}
            src="/6.png"
            alt="image-6"
            className="object-cover w-full h-full"
          />
          <Image
            width={300}
            height={464}
            src="/7.png"
            alt="image-7"
            className="object-cover w-full h-full"
          />
          <Image
            width={300}
            height={464}
            src="/8.png"
            alt="image-8"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
