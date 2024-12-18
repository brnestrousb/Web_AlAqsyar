"use client";

import CarouselCard from "../../fragments/CaraouselCard/page";
import Carousel from "../../fragments/Carousel/page";
import Footer from "../../fragments/Footer/page";
import Gallery from "../../fragments/Gallery/page";
import Navbar from "../../fragments/Navbar/page";
import bg from "../../../../../public/assets/home1.jpeg";
import bgPPDB from "../../../../../public/assets/PPDB/bgPPDB.jpg";
import { motion } from "motion/react";
import ScrollAnimationSection from "../../animations/scrollAnimation";

const Home = () => {
  const banners = [
    "/assets/banner/PPDB_SMP.jpeg",
    "/assets/banner/PPDB_SMK.jpeg",
    "/assets/banner/PPDB_SMP_SMK.jpeg",
  ];

  const slidesData = [
    {
      image: "/assets/news/news1.jpeg",
      title: "PELAKSANAAN ASESMENT BAKAT MINAT",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      link: "/news/asesment-bakat-minat",
    },
    {
      image: "/assets/news/news2.jpeg",
      title: "KUNJUNGAN PROGRAM KEAHLIAN PEMASARAN RABBANI FACTORY",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      link: "/news/rabbani-factory",
    },
    {
      image: "/assets/news/news3.jpeg",
      title: "KUNJUNGAN KEAHLIAN PROGRAM AKUTANSI KEUANGAN & LEMBAGA",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      link: "/news/akutansi-keuangan",
    },
    {
      image: "/assets/news/news3.jpeg",
      title: "KUNJUNGAN KEAHLIAN PROGRAM AKUTANSI KEUANGAN & LEMBAGA",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      link: "/news/akutansi-keuangan",
    },
  ];

  const galleryItems = [
    {
      href: "#",
      src: "/assets/gallery/event_hariGuru.jpeg",
      alt: "Hari Guru",
      title: "Hari Guru",
      description: "Kegiatan Sekolah",
      isWide: false,
    },
    {
      href: "#",
      src: "/assets/gallery/pramuka.jpeg",
      alt: "Pramuka",
      title: "Pramuka",
      description: "Ekstrakulikuler",
      isWide: true,
    },
    {
      href: "#",
      src: "/assets/gallery/tari.jpg",
      alt: "Tari",
      title: "Tari",
      description: "Ekstrakulikuler",
      isWide: true,
    },
    {
      href: "#",
      src: "/assets/gallery/prestasi.jpeg",
      alt: "Prestasi",
      title: "Apresiasi Juara",
      description: "Prestasi",
      isWide: false,
    },
  ];

  return (
    <div className="w-full h-screen">
      <Navbar />
      <main>
        <motion.section
          className="shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full h-screen flex flex-col justify-center items-center absolute z-10">
            <h1 className="text-3xl font-bold">SMK AL-AQSYAR</h1>
            <h2 className="text-xl font-medium">ISLAMIC SCHOOL</h2>
            <h3 className="text-xl font-normal">
              "SMART & MODERN FOR YOU FUTURE"
            </h3>
            <button className="mt-6 bg-yellow-500 p-2 w-32 rounded-md text-white hover:bg-yellow-600 transition-all">
              Masuk
            </button>
          </div>
          <div
            className="w-full h-screen bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url(${bg.src})` }}
          ></div>
        </motion.section>
        <section>
          <div className="w-full h-full mt-5">
            <motion.div
              className="flex justify-center items-center gap-10 mb-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <div className="flex w-1/3 flex-col gap-3">
                <div className="bg-yellow-400 h-1"></div>
                <div className="bg-yellow-400 h-1"></div>
              </div>
              <h1 className="text-2xl font-bold text-yellow-400 tracking-widest p-4">
                NEWS
              </h1>
              <div className="flex w-1/3 flex-col gap-3">
                <div className="bg-yellow-400 h-1"></div>
                <div className="bg-yellow-400 h-1"></div>
              </div>
            </motion.div>
            <motion.div
              className="w-full h-full"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 50 }}
            >
              <Carousel banners={banners} />
            </motion.div>
            <ScrollAnimationSection>
            <div className="w-full h-full mt-10">
              <CarouselCard slides={slidesData} />
            </div>
            </ScrollAnimationSection>
          </div>
        </section>
        <section>
          <ScrollAnimationSection>
            <div className="w-full h-full mt-10">
              <div className="flex justify-center items-center gap-10">
                <div className="flex w-1/3 flex-col gap-3">
                  <div className="bg-yellow-400 h-1"></div>
                  <div className="bg-yellow-400 h-1"></div>
                </div>
                <h1 className="text-2xl font-bold text-yellow-400 tracking-widest p-4">
                  AGENDA
                </h1>
                <div className="flex w-1/3 flex-col gap-3">
                  <div className="bg-yellow-400 h-1"></div>
                  <div className="bg-yellow-400 h-1"></div>
                </div>
              </div>
              <div className="w-full gap-2 flex justify-around items-center p-4">
                <motion.div
                  className="w-1/3 h-56 bg-slate-300 flex"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-1/2 h-56 bg-blue-700"></div>
                  <div className="p-4">
                    <h1 className="text-2xl mb-4">
                      SUMATIF AKHIR SEMESTER SMK AL-AQSYAR
                    </h1>
                    <div className="flex justify-center items-center gap-2">
                      <svg
                        className="w-12 h-12 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fill="#00000"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-sm">
                        10 Agustus 2023 - 13 Agustus 2023
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="w-1/3 h-56 bg-slate-300 flex"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-1/2 h-56 bg-blue-700"></div>
                  <div className="p-4">
                    <h1 className="text-2xl mb-4">
                      SUMATIF AKHIR SEMESTER SMK AL-AQSYAR
                    </h1>
                    <div className="flex justify-center items-center gap-2">
                      <svg
                        className="w-12 h-12 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        fill="#00000"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-sm">
                        10 Agustus 2023 - 13 Agustus 2023
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollAnimationSection>
        </section>
        <section>
          <ScrollAnimationSection>
            <div className="w-full h-full mt-5">
              <div className="flex justify-center items-center gap-10 mb-5">
                <div className="flex w-1/3 flex-col gap-3">
                  <div className="bg-yellow-400 h-1"></div>
                  <div className="bg-yellow-400 h-1"></div>
                </div>
                <h1 className="text-2xl font-bold text-yellow-400 tracking-widest p-4">
                  GALERI
                </h1>
                <div className="flex w-1/3 flex-col gap-3">
                  <div className="bg-yellow-400 h-1"></div>
                  <div className="bg-yellow-400 h-1"></div>
                </div>
              </div>
              <div className="w-full h-full">
                <Gallery items={galleryItems} />
              </div>
            </div>
          </ScrollAnimationSection>
        </section>
        <section>
          <ScrollAnimationSection>
            <div className="w-full h-full mt-5">
              <div className="flex justify-center items-center gap-10 mb-5">
                <div className="flex w-1/3 flex-col gap-3">
                  <div className="bg-yellow-400 h-1"></div>
                  <div className="bg-yellow-400 h-1"></div>
                </div>
                <h1 className="text-2xl font-bold text-yellow-400 tracking-widest p-4">
                  INFORMATION
                </h1>
                <div className="flex w-1/3 flex-col gap-3">
                  <div className="bg-yellow-400 h-1"></div>
                  <div className="bg-yellow-400 h-1"></div>
                </div>
              </div>
              <div className="w-full h-full">
                <div className="w-full h-1/2 flex justify-center items-start p-10 gap-8 bg-yellow-300 shadow-lg">
                  <div className="w-full h-full bg-white shadow-lg flex flex-col justify-center items-center py-6 gap-2">
                    <h1 className="text-7xl font-bold text-blue-700">100+</h1>
                    <h2 className="text-3xl font-semibold">TEACHERS</h2>
                  </div>
                  <div className="w-full h-full bg-white shadow-lg flex flex-col justify-center items-center py-6 gap-2">
                    <h1 className="text-7xl font-bold text-blue-700">500+</h1>
                    <h2 className="text-3xl font-semibold">STUDENTS</h2>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimationSection>
        </section>
        <motion.section
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full h-full mt-10">
              <div className="w-full h-screen flex flex-col justify-center items-center absolute z-10 shadow-lg">
                <ScrollAnimationSection>
                <h1 className="text-4xl font-bold">
                  PENDAFTARAN TAHUN AJARAN 2025/2026
                </h1>
                </ScrollAnimationSection>
                <ScrollAnimationSection>
                <h2 className="text-xl font-medium mt-4">AYO BERGABUNG!!</h2>
                </ScrollAnimationSection>
                <ScrollAnimationSection>
                <div className="flex justify-center items-center gap-4 w-full">
                  <button className="mt-6 text-xl bg-yellow-300 px-8 py-2 w-42 rounded-md hover:bg-yellow-600 transition-all shadow-lg">
                    Pendaftaran Online
                  </button>
                  <button className="mt-6 text-xl bg-purple-400 px-8 py-2 w-42 rounded-md hover:bg-purple-500 transition-all shadow-lg">
                    Kontak Person
                  </button>
                </div>
                </ScrollAnimationSection>
              </div>
            <div
              className="w-full h-screen bg-cover bg-center opacity-40"
              style={{ backgroundImage: `url(${bgPPDB.src})` }}
            ></div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
