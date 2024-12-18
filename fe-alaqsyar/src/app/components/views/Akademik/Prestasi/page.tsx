import Gallery from "@/app/components/fragments/Gallery/page";

const Prestasi = () => {
  const galleryItems = [
    {
      href: "#",
      src: "/assets/prestasi/prestasi_1.jpeg",
      alt: "Juara 3 Poster Digital",
      title: "Juara 3 Poster Digital",
      description: "Prestasi",
      isWide: false,
    },
    {
      href: "#",
      src: "/assets/prestasi/prestasi_2.jpeg",
      alt: "Pramuka",
      title: "Pramuka",
      description: "Ekstrakulikuler",
      isWide: true,
    },
    {
      href: "#",
      src: "/assets/prestasi/prestasi_3.jpeg",
      alt: "Tari",
      title: "Tari",
      description: "Ekstrakulikuler",
      isWide: true,
    },
    {
      href: "#",
      src: "/assets/prestasi/prestasi_4.jpeg",
      alt: "Prestasi",
      title: "Apresiasi Juara",
      description: "Prestasi",
      isWide: false,
    },
    {
      href: "#",
      src: "/assets/prestasi/prestasi_5.jpeg",
      alt: "Prestasi",
      title: "Apresiasi Juara",
      description: "Prestasi",
      isWide: false,
    },
    {
      href: "#",
      src: "/assets/prestasi/prestasi_6.jpeg",
      alt: "Prestasi",
      title: "Apresiasi Juara",
      description: "Prestasi",
      isWide: true,
    },
  ];

  return (
    <>
      <section className="shadow-lg">
        <div className="w-full h-screen flex flex-col justify-center items-center absolute z-10">
          <h1 className="text-3xl font-bold tracking-widest">PRESTASI</h1>
          <h2 className="text-5xl font-medium tracking-widest">
            SMK AL-AQSYAR
          </h2>
        </div>
        <div
          className="w-full h-screen bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url('/assets/bgVisiMisi.jpg')` }}
        ></div>
      </section>
      <section>
        <div className="w-full h-full mt-5">
          {/* Divider Section */}
          <div className="flex justify-center items-center gap-10">
            <div className="flex w-full flex-col gap-3">
              <div className="bg-yellow-400 h-1"></div>
              <div className="bg-yellow-400 h-1"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col w-full p-44">
            {/* Misi Section */}
            <div className="flex flex-col mt-8">
              <h1 className="text-4xl font-bold">Prestasi</h1>
              <div className="flex gap-5 mt-5">
                <button className="p-2 border-2 rounded-lg shadow-lg hover:bg-black hover:text-white transition-all">Akademik</button>
                <button className="p-2 border-2 rounded-lg shadow-lg hover:bg-black hover:text-white transition-all">Non Akademik</button>
              </div>
              <div className="flex flex-col mt-2 w-full h-full">
                <Gallery items={galleryItems} />
              </div>
            </div>
          </div>
          {/* Divider Section */}
        </div>
        <div className="flex justify-center items-center mb-5 gap-10">
          <div className="flex w-full flex-col gap-3">
            <div className="bg-yellow-400 h-1"></div>
            <div className="bg-yellow-400 h-1"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Prestasi;
