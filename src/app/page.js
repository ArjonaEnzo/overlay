'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Pacifico } from 'next/font/google';

const pasifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
});

export default function Home() {
  const bgAnimate = {
    hidden: {
      clipPath: 'polygon(21% 26%, 77% 26%, 77% 77%, 21% 77%)',
    },
    show: {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transition: {
        ease: 'easeInOut',
        duration: 0.8,
        delay: 1,
      },
    },
  };
  const textAnimate1 = {
    hidden: {
      y: '100%',
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: 0.8,
        staggerChildren: 0.4,
        delayChildren: 1,
      },
    },
  };
  const textAnimate2 = {
    hidden: {
      x: 0,
    },
    show: (i) => ({
      x: i,
      transition: {
        ease: 'easeOut',
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
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };
  const imageAnimateChild = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: 'easeInOut',
      },
    },
  };
  const navAnimate = {
    hidden: {
      y: '-110%',
    },
    show: {
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        delay: 2,
      },
    },
  };
  const textParagraph = {
    hidden: {
      y: '-100%',
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 60,
        delay: 2.8,
      },
    },
  };
  return (
    <motion.main
      className=" w-screen h-screen flex flex-col items-center  bg-cover bg-no-repeat bg-center  "
      style={{
        backgroundImage: 'url("/img/LOGO-NEGRO-FONDO-BLANCO.jpg")',
      }}
    >
      <motion.nav
        className="flex justify-between items-center w-full text-black relative z-10 pt-4 px-2  "
        variants={navAnimate}
        initial="hidden"
        animate="show"
      >
        <div className={`text-lg font-bold underline ${pasifico.className}  `}>
          ATACAMA
        </div>
        <ul className="w-[70%] sm:w-[50%] flex gap-2 items-center  justify-between ">
          <li>Home</li>
          <li>Sobre Nosotros</li>
          <li>Contacto</li>
        </ul>
      </motion.nav>
      <div className="relative top-[120px] bg-red-700">
        <motion.div
          className="relative left-[25%] bg-blue-700"
          variants={textAnimate1}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className={`text-7xl text-black lowercase tracking-tighter font-semibold z-10 ${pasifico.className}`}
            variants={textAnimate2}
            custom={-150}
          >
            ESTUDIO
          </motion.h1>
        </motion.div>
        {/* <motion.p
          className="absolute top-12 right-32 z-10 w-[500px] text-justify leading-5 text-[#eaeaea] text-xs font-medium"
          variants={textParagraph}
          initial="hidden"
          animate="show"
        >
          <span className="text-yellow-200">
            En ATACAMA, capturamos momentos inolvidables con un enfoque único y
            creativo. Somos un estudio audiovisual especializado en eventos
            sociales, comprometidos en transformar cada ocasión en una
            experiencia visualmente impactante y emocionalmente auténtica.
          </span>{' '}
          Confía en nosotros para capturar tus momentos más preciados y
          convertirlos en recuerdos que perduren toda la vida.
        </motion.p> */}
        {/* <motion.div
          className="relative left-[20%]"
          variants={textAnimate1}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-9xl text-white font-semibold tracking-tighter z-10"
            variants={textAnimate2}
            custom={100}
          >
            AUDIOVISUAL
          </motion.h1>
        </motion.div> */}
      </div>
      {/* <div className="flex gap-3 flex-wrap">
        <motion.div
          className="flex gap-4 absolute bottom-4"
          variants={imageAnimate}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="relative w-[300px] h-[200px]"
            variants={imageAnimateChild}
          >
            <Image
              src="/img/GCV9NdDWgAA_H1v.jpg"
              alt="image"
              fill
              sizes="(max-width:768px) 33vw, (max-width:1024px) 50vw, 100vw"
              className="object-cover rounded-sm saturate-150"
            />
          </motion.div>
          <motion.div
            className="relative w-[300px] h-[200px]"
            variants={imageAnimateChild}
          >
            <Image
              src="/img/GDusokhWQAAVJOd.jpg"
              alt="image"
              fill
              sizes="(max-width:768px) 33vw, (max-width:1024px) 50vw, 100vw"
              className="object-cover rounded-sm saturate-150"
            />
          </motion.div>
          <motion.div
            className="relative w-[300px] h-[200px]"
            variants={imageAnimateChild}
          >
            <Image
              src="/img/GIIfwOhW0AAcKb2.png"
              alt="image"
              fill
              sizes="(max-width:768px) 33vw, (max-width:1024px) 50vw, 100vw"
              className="object-cover rounded-sm saturate-150"
            />
          </motion.div>
        </motion.div>
      </div> */}
    </motion.main>
  );
}
