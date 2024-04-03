"use client"
import Image from "next/image";
import { Pacifico } from "next/font/google";

const pacifico =Pacifico({
  subsets:["latin"],
  weight:"400"
})
export default function Home() {
  return (
  <main className="h-screen px-4 overflow-hidden">
    <div className="absolute inset-0 h-screen w-screen z-0">
      <Image src="/img/LOGO-NEGRO-FONDO-BLANCO (1).jpg" alt="background" fill priority={true} sizes="(max-width:768px) 33vw, (max-width:1024px) 50vw, 100vw " className="object-cover brightness-50"/>
    </div>
    <nav className="flex justify-between items-center">
      <div className={`text-xl font-bold text-black underline ${pacifico.className}`}>
TTrabjando
      </div>
      <ul className="w-[300px] flex justify-between items-center">
        <li>Inicio</li>
        <li>Sobre ATACAMA</li>
        <li>Contacto</li>
      </ul>
    </nav>

    <div className="relative top-[120px]">
      <div className="relative left-[25%]">
        <h1 className={`text-9x1 text-white tracking-tighter font-bold ${pacifico.className}`}>TRabajaando</h1>
      </div>
      <div className="relative left-[25%]">
        <h1 className={`text-9x1 text-white tracking-tighter font-bold `}>Experience</h1>
      </div>
    </div>

  </main>
  );
}
