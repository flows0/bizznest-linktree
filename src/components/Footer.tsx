export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className="mt-12 pb-4 flex items-center justify-center">
      <p className="text-small text-brand600">
        © {currentYear} Billy Flowers
      </p>
    </footer>
  );
}