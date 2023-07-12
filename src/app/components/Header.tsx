import { Poppins, Roboto } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function Header() {
  return (
    <header className="flex flex-col relative h-64 justify-center bg-slate-600/10 rounded-xl items-center overflow-hidden">
      <Image
        src="/lol.jpeg"
        fill={true}
        alt="Picture of the author"
        className="opacity-30"
      />
      <p
        className={`text-xs md:text-sm max-w-3xl leading-normal text-center antialiased p-4 z-50 ${poppins.className}`}
      >
        A curated collection of quotes about bitcoin from Micheal J. Saylor.
      </p>
    </header>
  );
}
