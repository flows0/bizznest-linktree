import Tag from "./Tag";
import BackgroundImgSm from "../assets/background-img-sm.webp";
import BackgroundImgMd from "../assets/background-img-md.webp";
import BackgroundImgLg from "../assets/background-img-lg.jpg";
import ProfileImg from "../assets/profile-img.webp";
import ToggleStatsBtn from "./ToggleStatsBtn";

export default function Header({ showStats, onToggle }: { showStats: boolean; onToggle: () => void }) {
  return (
    <>
      <div className="relative z-10 flex justify-end px-6 pt-5">
        <ToggleStatsBtn
          showStats={showStats}
          onToggle={onToggle}
        />
      </div>
      <div className="mt-15">
        <header className="z-10 flex flex-col items-center max-w-7xl mx-auto px-6">
          <div className="size-25 overflow-hidden rounded-full ring-2 ring-brand50">
            <img
              src={ProfileImg}
              alt="Profile image"
              width={100}
              height={100}
              decoding="async"
              className="w-full h-full rounded-full object-cover scale-125"
            />
          </div>
          <h1 className="text-h4 font-bold mt-4 text-brand50">
            Billy Flowers
          </h1>
          <p className="text-p mt-2 text-brand200">
            Software Engineer
          </p>
          <Tag showStats={showStats} />
        </header>
        <div className="-z-10 absolute top-0 h-70 w-full">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={BackgroundImgMd}
              type="image/webp"
            />
            <source
              media="(max-width: 1399px)"
              srcSet={BackgroundImgSm}
              type="image/webp"
            />
            <source
              media="(min-width: 1400px)"
              srcSet={BackgroundImgLg}
              type="image/jpeg"
            />
            <img
              src={BackgroundImgMd}
              alt=""
              fetchPriority="high"
              width={768}
              height={512}
              className="h-full w-full object-cover object-center"
            />
          </picture>
          <div
            className="absolute inset-0 bg-linear-to-b from-transparent from-20% to-brand950 to-100%"
            aria-hidden="true"
          />
        </div>
      </div>
    </>
  );
}