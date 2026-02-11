import { useState, useEffect } from "react";
import { Playfair_Display } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Fireworks from "@fireworks-js/react";
import Image from "next/image";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

// 36 images
const images = [
  "../Efra-14-Feb-Dani-3/game-photos/1.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/2.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/3.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/4.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/5.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/6.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/7.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/8.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/9.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/10.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/11.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/12.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/13.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/14.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/15.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/16.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/17.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/18.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/19.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/20.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/21.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/22.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/23.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/24.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/25.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/26.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/27.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/28.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/29.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/30.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/31.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/32.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/33.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/34.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/35.jpeg",
  "../Efra-14-Feb-Dani-3/game-photos/36.jpeg",
];

export default function ValentinesProposal() {
  const [step, setStep] = useState(0);
  const [position, setPosition] = useState<{
    top: string;
    left: string;
  } | null>(null);
  const [showFireworks, setShowFireworks] = useState(false);

  const getRandomPosition = () => {
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;
    return { top: `${randomTop}%`, left: `${randomLeft}%` };
  };

  useEffect(() => {
    if (step < 2) {
      // Change step after 5 seconds
      const timer = setTimeout(() => {
        setStep((prevStep) => prevStep + 1);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleYesClick = () => {
    setShowFireworks(true);
    setStep(3);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.h2
            key="step-0"
            className={`text-4xl font-semibold mb-4 ${playfairDisplay.className}`}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Feliciades! lo has echo muy bien.
          </motion.h2>
        )}
        {step === 1 && (
          <motion.h2
            key="step-1"
            className={`text-4xl font-semibold mb-4 ${playfairDisplay.className}`}
            transition={{ duration: 3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Te tengo una sorpresa!
          </motion.h2>
        )}
        {step === 2 && (
          <motion.div
            key="step-2"
            transition={{ duration: 3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center"
          >
            {/* Image Grid Background */}
            <div className="absolute inset-0 grid grid-cols-6 opacity-10">
              {images.slice(0, 36).map((src, index) => (
                <div key={index} className="relative h-full">
                  <Image
                    src={src}
                    alt={`Memory ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <h2
              className={`text-5xl font-semibold mb-8 ${playfairDisplay.className}`}
            >
              Te gustaria ser mi San Valentin?
            </h2>
            <Image
              src="/chimuelo.png"
              alt="chiumuelo"
              width={200}
              height={200}
            />
            <div className="flex space-x-4 mt-10">
              <button
                className="px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={handleYesClick}
              >
                Si, Si Quiero!! 🥰
              </button>
              <button
                className="px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl hover:from-gray-600 hover:to-gray-700 transform hover:scale-95 transition-all duration-300 shadow-lg"
                style={
                  position
                    ? {
                        position: "absolute",
                        top: position.top,
                        left: position.left,
                      }
                    : {}
                }
                onMouseEnter={() => setPosition(getRandomPosition())}
                onClick={() => setPosition(getRandomPosition())}
              >
                No 😢
              </button>
            </div>
          </motion.div>
        )}
        {step === 3 && (
          <motion.div
            key="step-3"
            className={`text-4xl font-semibold mb-4 flex flex-col justify-center items-center ${playfairDisplay.className}`}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Muy feliz de que aceptaras Dani Bonita! 💕
            <p className="text-sm mt-4">Te Amo!!! 💌 Nos vemos el sabado</p>
            <Image
              src="/hamster_jumping.gif"
              alt="Hamster Feliz"
              width={200}
              height={200}
              unoptimized
            />
          </motion.div>
        )}
      </AnimatePresence>

      {showFireworks && (
        <div className="absolute w-full h-full">
          <Fireworks
            options={{
              autoresize: true,
            }}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>
      )}
    </div>
  );
}
