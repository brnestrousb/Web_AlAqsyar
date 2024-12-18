import Image from "next/image";

const StrukturOrganisasi = () => {
  return (
    <>
      <section className="shadow-lg">
        <div className="w-full h-screen flex flex-col justify-center items-center absolute z-10">
          <h1 className="text-3xl font-bold tracking-widest">
            STRUKTUR ORGANISASI
          </h1>
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
        </div>
        <div className="flex flex-col w-full h-full">
          <div className="flex justify-center items-center p-10">
            <div className="flex w-full justify-center items-center">
              <div className="w-72 h-full shadow-2xl rounded-md">
                <Image
                  src="/assets/pengajar/KEPALA_SEKOLAH.JPG"
                  alt="guru"
                  width={300}
                  height={300}
                />
                <div className="flex flex-col justify-center items-center mt-5 p-6 gap-4">
                  <h1 className="text-2xl font-semibold">Anggraeini, S.Pd.</h1>
                  <h2 className="text-lg font-bold">KEPALA SEKOLAH</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center p-10">
            <div className="flex w-full justify-center items-center gap-32">
              <div className="w-72 h-full shadow-2xl rounded-md">
                <Image
                  src="/assets/pengajar/WAKA_KURIKULUM.JPG"
                  alt="guru"
                  width={300}
                  height={300}
                />
                <div className="flex flex-col justify-center items-center mt-5 p-6 gap-4">
                  <h1 className="text-2xl font-semibold">Malia, SE</h1>
                  <h2 className="text-lg font-bold">Waka Bidang Kurikulum</h2>
                </div>
              </div>
              <div className="w-72 h-full shadow-2xl rounded-md">
                <Image
                  src="/assets/pengajar/WAKA_KESISWAAN.JPG"
                  alt="guru"
                  width={300}
                  height={300}
                />
                <div className="flex flex-col justify-center items-center mt-5 p-6 gap-4">
                  <h1 className="text-2xl font-semibold text-center">
                    Alwan Abdurrahman, SE.
                  </h1>
                  <h2 className="text-lg font-bold">Waka Bidang Kesiswaan</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center p-10">
            <div className="flex w-full justify-center items-center gap-32">
              <div className="w-72 h-full shadow-2xl rounded-md">
                <Image
                  src="/assets/pengajar/WAKA_HUBIN.JPG"
                  alt="guru"
                  width={300}
                  height={300}
                />
                <div className="flex flex-col justify-center items-center mt-5 p-6 gap-4">
                  <h1 className="text-2xl font-semibold text-center">
                    Pahruroji, S.Ak.
                  </h1>
                  <h2 className="text-lg font-bold">Waka Bidang Hubin</h2>
                </div>
              </div>
              <div className="w-72 h-full shadow-2xl rounded-md">
                <Image
                  src="/assets/pengajar/WAKA_SARPRAS.JPG"
                  alt="guru"
                  width={300}
                  height={300}
                />
                <div className="flex flex-col justify-center items-center mt-5 p-6 gap-4">
                  <h1 className="text-2xl font-semibold text-center">
                    Sudarjat, S,Kom.
                  </h1>
                  <h2 className="text-lg font-bold">Waka Bidang Sarpras</h2>
                </div>
              </div>
            </div>
          </div>
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

export default StrukturOrganisasi;
