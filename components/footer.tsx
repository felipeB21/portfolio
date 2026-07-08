import Weather from "./weather";
import Clock from "./clock";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-between max-w-2xl m-auto p-5  w-full">
      <p>&copy; {year} Felipe Bolgar. All rights reserved.</p>
      <div className="flex items-center gap-3">
        <Clock />
        <Weather />
      </div>
    </footer>
  );
}
