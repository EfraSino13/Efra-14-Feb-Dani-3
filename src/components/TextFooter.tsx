import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

export default function TextFooter() {
  return (
    <>
      {/* Left Text */}
      <h1
        className={`absolute left-10 bottom-5 transform -translate-y-1/2 text-white text-4xl lg:text-5xl font-bold leading-tight ${playfairDisplay.className}`}
      >
        <span className="text-400 colorDani">Has match</span> <br /> en cada foto
      </h1>

      {/* Right Text */}
      <h1
        className={`absolute right-10 bottom-5 transform -translate-y-1/2 text-white text-4xl lg:text-5xl font-bold leading-tight text-right ${playfairDisplay.className}`}
      >
        para continuar <br /> <span className="text-400 colorDani">Dani</span>
      </h1>

      {/* Copyright */}
    </>
  );
}
