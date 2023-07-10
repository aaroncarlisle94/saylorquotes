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

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Quote(randomQuote: Quote) {
  const router = useRouter();
  const [fade, setFade] = useState(false);

  return (
    <section
      className={`flex flex-col justify-center items-center px-2 transition-opacity ease-in-out duration-1000 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="grow mt-24">
        <p
          className={`text-2xl md:text-4xl max-w-3xl text-center leading-none ${roboto.className}`}
        >
          &quot;{randomQuote.quote}&quot;
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p
          className={`text-md md:text-2xl text-center mt-4 ${poppins.className}`}
        >
          {randomQuote.author}
        </p>
        <button
          type="submit"
          className="text-white bg-gradient-to-br from-pink-500 to-[#FF9900] hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-6"
          onClick={() => {
            setFade(true);
            setTimeout(() => router.refresh(), 1000);
            setTimeout(() => setFade(false), 1100);
          }}
        >
          Next Quote
        </button>
      </div>
    </section>
  );
}
