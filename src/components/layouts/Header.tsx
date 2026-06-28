import ProfileImg from "../../assets/profile-img.webp";
import BackgroundSmImg from "../../assets/background-img-sm.webp";
import BackgroundMdImg from "../../assets/background-img-md.webp";
import BackgroundLgImg from "../../assets/background-img-lg.jpg";
import ToggleStats from "../../modules/analytics/components/ToggleStats";
import AnalyticsTag from "../../modules/analytics/components/AnalyticsTag";

export default function Header({
  showStats,
  onToggle
}: {
  showStats: boolean;
  onToggle: () => void
}) {
  return (
    <>
      <div className="relative z-10 flex justify-end px-6 pt-5">
        <ToggleStats
          showStats={showStats}
          onToggle={onToggle}
        />
      </div>
      <header className="mt-15">
        <div className="z-10 flex flex-col items-center max-w-7xl mx-auto px-6">
          <div className="size-25 overflow-hidden rounded-full ring-2 ring-brand50">
            <img
              src={ProfileImg}
              alt="Profile image"
              width={100}
              height={100}
              draggable={false}
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
          <AnalyticsTag showStats={showStats} />
        </div>
        <div className="-z-10 absolute top-0 h-70 w-full">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={BackgroundSmImg}
              type="image/webp"
            />
            <source
              media="(max-width: 1399px)"
              srcSet={BackgroundMdImg}
              type="image/webp"
            />
            <source
              media="(min-width: 1400px)"
              srcSet={BackgroundLgImg}
              type="image/jpeg"
            />
            <img
              src={BackgroundSmImg}
              alt="Background image"
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
      </header>
    </>
  );
}