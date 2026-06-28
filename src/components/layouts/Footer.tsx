export default function Footer() {
  const date = new Date();
  const hour = date.getHours();

  const timeEmoji = hour >= 6 && hour < 20 ? "🌞" : "🌚";

  return (
    <footer className="mt-12 pb-4 flex items-center justify-center">
      <p className="text-small text-center text-brand400">
        Designed in Figma.
        <br className="sm:hidden" /> {" "}
        Built with React and Tailwind CSS {timeEmoji}
      </p>
    </footer>
  );
}