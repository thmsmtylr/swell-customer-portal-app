import { Avatar } from "./Avatar";
import ArrowLeft from "/public/arrow-left.svg";

export function Header() {
  return (
    <header className="sticky left-0 top-0 flex h-20 w-full items-center gap-3 bg-background pl-12">
      <a
        href="#"
        className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-2 py-1.5 text-xs text-primary"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </a>
    </header>
  );
}
