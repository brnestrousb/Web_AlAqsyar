
const VisiMisi = () => {
  return (
    <>
      <section className="shadow-lg">
        <div className="w-full h-screen flex flex-col justify-center items-center absolute z-10">
          <h1 className="text-3xl font-bold tracking-widest">VISI & MISI</h1>
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
            {/* Visi Section */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold">Visi</h1>
              <p className="text-xl mt-4 font-medium">
                Menjadi Sekolah Menengah Kejuruan yang menghasilkan insan
                religius, berakhlak mulia, responsif, profesional, mandiri serta
                berdaya saing global.
              </p>
            </div>

            {/* Misi Section */}
            <div className="flex flex-col mt-8">
              <h1 className="text-4xl font-bold">Misi</h1>
              <ul className="flex flex-col gap-4 list-decimal list-outside mt-4 text-lg font-medium leading-relaxed">
                <li>
                  Menyelenggarakan kegiatan pembiasaan beribadah dalam rangka
                  peningkatan ketaqwaan.
                </li>
                <li>
                  Membentuk karakter yang berakhlak mulia, peduli terhadap
                  sesama dan lingkungan.
                </li>
                <li>
                  Mendidik dan melatih peserta didik sesuai kebutuhan dunia
                  kerja serta memiliki karakter entrepreneur.
                </li>
                <li>
                  Meningkatkan kualitas pendidik dan tenaga kependidikan yang
                  memenuhi kualifikasi profesional, sertifikasi kompetensi,
                  kreatif, inovatif, berkarakter dan berbudaya.
                </li>
                <li>
                  Meningkatkan fasilitas dan lingkungan belajar yang aman,
                  nyaman memenuhi standar nasional pendidikan, standar industri
                  secara kualitas dan kuantitas.
                </li>
                <li>
                  Meningkatkan pelayanan prima pada pelanggan dalam
                  penyelenggaraan sekolah.
                </li>
                <li>
                  Menyelenggarakan pembelajaran dengan pendekatan teknologi
                  informasi dan komunikasi.
                </li>
              </ul>
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

export default VisiMisi;
