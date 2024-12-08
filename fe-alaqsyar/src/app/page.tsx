import Image from "next/image";
import Navbar from "./components/fragments/Navbar/page";
import bg from "../../public/assets/home1.jpeg";
import { url } from "inspector";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <main>
        <section className="shadow-lg">
          <div className="w-full h-screen flex flex-col justify-center items-center absolute z-10">
            <h1 className="text-3xl font-bold">SMK AL-AQSYAR</h1>
            <h2 className="text-xl font-medium">ISLAMIC SCHOOL</h2>
            <h3 className="text-xl font-normal">"SMART & MODERN FOR YOU FUTURE"</h3>
            <button className="mt-6 bg-yellow-500 p-2 w-32 rounded-md text-white hover:bg-yellow-600 transition-all">Masuk</button>
          </div>
          <div
            className="w-full h-screen bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url(${bg.src})` }}
          ></div>
        </section>
        <section>
          <div className="w-full h-screen mt-5">
              <div className="flex justify-center items-center">
                  <h1 className="text-2xl font-bold">NEWS</h1>
              </div>
          </div>
        </section>
      </main>
    </div>
  );
}
