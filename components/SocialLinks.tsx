import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "X",
    icon: "/X.jpg",
    url: "https://x.com/adunoflagoz?s=21",
    width: 24,
    height: 24,
  },
  {
    name: "TikTok",
    icon: "/tiktok.png",
    url: "https://www.tiktok.com/@adunoflagoz?_r=1&_t=ZS-934MCcCd6HN",
    width: 21,
    height: 24,
  },
  {
    name: "Instagram",
    icon: "/instagram.png",
    url: "https://www.instagram.com/adunoflagoz?igsh=cGw2dzdjYnhzN3Bx&utm_source=qr",
    width: 24,
    height: 24,
  },
  {
    name: "Email",
    icon: "/official-gmail-icon-2020-.svg",
    url: "mailto:Ainamuyiwa18@gmail.com",
    width: 24,
    height: 24,
  },
];

const SocialLinks = () => {
  return (
    <div className="flex md:gap-8 items-center justify-between md:justify-center mt-4 py-4">
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-[#494949] rounded-full hover:border-white/50 transition-colors"
          aria-label={social.name}
        >
          <Image
            width={social.width}
            height={social.height}
            src={social.icon}
            alt={social.name}
            className="w-4 h-4 md:w-6 md:h-6"
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
