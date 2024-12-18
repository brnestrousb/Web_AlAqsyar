import Image from "next/image";

const Program = () => {
    return (
      <>
        <section className="shadow-lg">
          <div className="w-full h-screen flex flex-col justify-center items-center absolute z-10">
            <h1 className="text-3xl font-bold tracking-widest">PROGRAM PEMBELAJARAN</h1>
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
              <div className="w-full h-full">
                <h1 className="text-4xl font-bold">Program Unggulan</h1>
                <p className="mt-10 text-2xl indent-16 text-justify whitespace-normal">
                  Dengan kurikulum dan program unggulan ini, SMK Al Aqsyar
                  berkomitmen mencetak generasi yang kompeten, berakhlak mulia,
                  dan siap menghadapi dunia kerja.
                </p>
                <div className="w-full grid grid-cols-2 justify-items-center items-center h-screen">
                  <div className="flex flex-col gap-2 w-72 h-56 border-2 shadow-lg rounded-lg justify-center items-center">
                    <Image
                      src="/assets/icon/quran.png"
                      width={100}
                      height={100}
                      alt="kurikulum"
                    />
                    <h1 className="text-2xl">Tahfiz Al-Qur’an</h1>
                  </div>
                  <div className="flex flex-col gap-2 w-72 h-56 border-2 shadow-lg rounded-lg justify-center items-center">
                    <Image
                      src="/assets/icon/english.png"
                      width={100}
                      height={100}
                      alt="kurikulum"
                    />
                    <h1 className="text-2xl">Bahasa Inggris</h1>
                  </div>
                  <div className="flex flex-col gap-2 w-72 h-56 border-2 shadow-lg rounded-lg justify-center items-center">
                    <Image
                      src="/assets/icon/literasi.png"
                      width={100}
                      height={100}
                      alt="kurikulum"
                    />
                    <h1 className="text-2xl">Literasi </h1>
                  </div>
                  <div className="flex flex-col gap-2 w-72 h-56 border-2 shadow-lg rounded-lg justify-center items-center">
                    <Image
                      src="/assets/icon/ibadah.png"
                      width={100}
                      height={100}
                      alt="kurikulum"
                    />
                    <h1 className="text-2xl">Ibadah Harian</h1>
                    <ul className="list-disc">
                      <li className="text-sm">
                        Sholat Dhuha dan dzikir setiap pagi
                      </li>
                      <li className="text-sm">Sholat berjamaah di sekolah</li>
                    </ul>
                  </div>
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
        {/* <section>
          
        </section> */}
      </>
    );
};

export default Program;