import Tag from "./Tag";
import BackgroundImg from "../assets/background-img.jpg";
import ProfileImg from "../assets/profile-img.jpeg";

export default function Header({ showStats }: { showStats: boolean }) {
  return (
    <div className="mt-20">
      <header className="z-10 flex flex-col items-center max-w-7xl mx-auto px-6">
        <img
          src={ProfileImg}
          alt="Profile image"
          className="size-25 rounded-full object-cover object-top ring-2 ring-brand200"
        />
        <h1 className="text-h4 font-bold mt-4 text-brand50">
          Billy Flowers
        </h1>
        <p className="text-p mt-2 text-brand200">
          Software Engineer
        </p>
        <Tag showStats={showStats} />
      </header>
      <div className="-z-10 absolute top-0 h-70 w-full">
        <img
          src={BackgroundImg}
          alt="Background image"
          className="h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-transparent from-20% to-brand950 to-100%"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}