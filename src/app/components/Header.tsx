"use client";

import { Poppins, Roboto } from "next/font/google";

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
    <header className="flex flex-col justify-center bg-slate-600/10 rounded-xl items-center">
      <h1
        className={`text-xl md:text-3xl max-w-3xl leading-normal antialiased text-center pt-4 ${poppins.className}`}
      >
        saylor.quotes
      </h1>
      <p
        className={`text-xs md:text-sm max-w-3xl leading-normal text-center antialiased p-4 ${poppins.className}`}
      >
        A curated collection of quotes about bitcoin from Micheal J. Saylor.
      </p>
    </header>
  );
}
