"use client";
import Image from "next/image";
import { Pacifico } from "next/font/google";
import { motion } from "framer-motion";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});
export default function Home() {
  const bgAnimation = {
    hidden: {
      clipPath: "polygon(21% 27%, 77% 26%, 77% 77%, 21% 77%)",
    },
    show: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        ease: "easeInOut",
        duration: 0.8,
        delay: 1,
      },
    },
  };
  const textAnimate1 = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        staggerChildren: 0.4,
        dalayChildren: 1,
      },
    },
  };
  const textAnimate2 = {
    hidden: {
      x: 0,
    },
    show: (i) => ({
      x: i,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    }),
  };
  const imageAnimate = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.6,
        delayChildren: 3.6,
        ease: "easeInOut",
      },
    },
  };
  const imageanimateChildren = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
      },
    },
  };
  const navAnimated = {
    hidden: {
      y: "-100%",
    },
    show: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        delay: 2,
      },
    },
  };
  const textParagraph = {
    hidden: {
      y: "-100",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        delay: 2.6,
      },
    },
  };

  return (
    <main className="h-screen px-4 overflow-hidden">
      <motion.div
        className="absolute inset-0 h-screen w-screen z-0"
        variants={bgAnimation}
        initial="hidden"
        animate="show"
      >
        <Image
          src="/img/LOGO-NEGRO-FONDO-BLANCO (1).jpg"
          alt="background"
          fill
          priority={true}
          sizes="(max-width:768px) 33vw, (max-width:1024px) 50vw, 100vw "
          className="object-cover brightness-50"
        />
      </motion.div>
      <motion.nav
        className="flex justify-between items-center py-2 relative z-10"
        variants={navAnimated}
        initial="hidden"
        animate="show"
      >
        <div
          className={`text-xl font-bold text-black underline ${pacifico.className}`}
        >
          TTrabjando
        </div>
        <ul className="w-[300px] flex justify-between items-center">
          <li className="font-semibold text-white">Inicio</li>
          <li className="font-semibold text-white">Sobre ATACAMA</li>
          <li className="font-semibold text-white">Contacto</li>
        </ul>
      </motion.nav>

      <div className="relative top-[120px]">
        <motion.div
          className="relative left-[25%]"
          variants={textAnimate1}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className={`text-9x1 text-white tracking-tighter font-bold ${pacifico.className}`}
            variants={textAnimate2}
          >
            TRabajaando
          </motion.h1>
        </motion.div>
        <motion.div
          className="relative left-[25%]"
          variants={textAnimate1}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className={`text-9x1 text-white tracking-tighter font-bold `}
            variants={textAnimate2}
          >
            Experience
          </motion.h1>
        </motion.div>
      </div>

      <div className="flex gap-4 absolute bottom-4">
        <div className="relative w-[300px] h-[250px]">
          <Image
            src="/img/GIIfwOhW0AAcKb2.png"
            fill
            sizes="(max-width:768px) 33vw, (max-width:1024px) 50vw, 100vw "
            className="object-cover rounded-sm saturate-150"
          />
        </div>
        <div className="relative w-[300px] h-[250px]">
          <Image
            src="/img/GCV9NdDWgAA_H1v.jpg"
            fill
            sizes="(max-width:768px) 33vw, (max-width:1024px) 50vw, 100vw "
            className="object-cover rounded-sm saturate-150"
          />
        </div>
        <div className="relative w-[300px] h-[250px]">
          <Image
            src="/img/GBv-sTbWcAASkT-.jpg"
            fill
            sizes="(max-width:768px) 33vw, (max-width:1024px) 50vw, 100vw "
            className="object-cover rounded-sm saturate-150"
          />
        </div>
      </div>
    </main>
  );
}
