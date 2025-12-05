import { Play } from "lucide-react";
import React from "react";
const VideoCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="group cursor-pointer w-full max-w-[604px]">
      <div className="relative w-full h-[560px] rounded-[48px] overflow-hidden mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-16 h-16 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-500 shadow-[0_6px_6px_rgba(0,0,0,0.2),0_0_20px_rgba(0,0,0,0.1)]">
            <div
              className="absolute inset-0 rounded-full backdrop-blur-[4px] saturate-[120%] brightness-[115%]"
              style={{ zIndex: 0 }}
            />

            <div
              className="absolute inset-0 rounded-full bg-white/25"
              style={{ zIndex: 1 }}
            />

            <div
              className="absolute inset-0 rounded-full shadow-[inset_1px_1px_0_rgba(255,255,255,0.75),inset_0_0_5px_rgba(255,255,255,0.75)]"
              style={{ zIndex: 2 }}
            />

            <div className="relative z-[3] w-full h-full flex items-center justify-center">
              <Play className="w-8 h-8 text-white fill-white ml-1 drop-shadow-[0_0_3px_rgba(255,255,255,0.25)] transition-transform duration-200 active:scale-95" />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
      </div>

      <div className="space-y-2">
        <h3 className="text-foreground text-3xl font-[family-name:var(--font-crimson)] font-normal">
          {title}
        </h3>
        <p className="text-[#B3B3B3] text-base font-[family-name:var(--font-switzer)]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
