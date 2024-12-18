const Fasilitas = () => {
  return (
    <>
      <section className="shadow-lg">
        <div className="w-full h-screen flex flex-col justify-center items-center absolute z-10">
          <h1 className="text-3xl font-bold tracking-widest">FASILITAS</h1>
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

        <div className="flex flex-col w-full h-full mt-5 mb-5 bg-gray-100">
          <div className="flex flex-row w-full justify-around h-screen items-center p-8  gap-5">
            <div className="flex w-full flex-col">
              <h1 className="text-4xl font-bold">Ruang Kelas</h1>
            </div>
            <div
              className="w-full h-full rounded-2xl bg-cover shadow-lg bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/assets/fasilitas/ruangKelas.jpg')`,
              }}
            ></div>
          </div>
          <div className="flex flex-row w-full justify-around h-screen items-center p-8  gap-5">
            <div
              className="w-full h-full rounded-2xl bg-cover shadow-lg bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/assets/fasilitas/labKom.jpg')`,
              }}
            ></div>
            <div className="flex w-full flex-col">
              <h1 className="text-4xl font-bold text-right">Lab Komputer</h1>
            </div>
          </div>
          <div className="flex flex-row w-full justify-around h-screen items-center p-8  gap-5">
            <div className="flex w-full flex-col">
              <h1 className="text-4xl font-bold">Lab IPA</h1>
            </div>
            <div
              className="w-full h-full rounded-2xl bg-cover shadow-lg bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/assets/fasilitas/labIPA.jpg')`,
              }}
            ></div>
          </div>
          <div className="flex flex-row w-full justify-around h-screen items-center p-8  gap-5">
            <div
              className="w-full h-full rounded-xl bg-cover shadow-lg bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/assets/fasilitas/masjid.jpg')`,
              }}
            ></div>
            <div className="flex w-full flex-col">
              <h1 className="text-4xl font-bold text-right">Tahfidz Masjid</h1>
            </div>
          </div>
          <div className="flex flex-row w-full justify-around h-screen items-center p-8  gap-5">
            <div className="flex w-full flex-col">
              <h1 className="text-4xl font-bold">
                Lapangan Olahraga Multi Fungsi
              </h1>
            </div>
            <div
              className="w-full h-full rounded-2xl bg-cover shadow-lg bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/assets/fasilitas/lapangan.jpg')`,
              }}
            ></div>
          </div>
          <div className="flex flex-row w-full justify-around h-screen items-center p-8  gap-5">
            <div
              className="w-full h-full rounded-2xl bg-cover shadow-lg bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/assets/fasilitas/kantin.jpg')`,
              }}
            ></div>
            <div className="flex w-full flex-col">
              <h1 className="text-4xl font-bold text-right">Kantin</h1>
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

export default Fasilitas;
