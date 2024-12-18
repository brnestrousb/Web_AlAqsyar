
const Kurikulum = () => {
  return (
    <>
      <section className="shadow-lg">
        <div className="w-full h-screen flex flex-col justify-center items-center absolute z-10">
          <h1 className="text-3xl font-bold tracking-widest">KURIKULUM</h1>
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
              <h1 className="text-4xl font-bold">Kurikulum</h1>
              <p className="mt-10 text-2xl indent-16 text-justify whitespace-normal">
                SMK Al Aqsyar menerapkan pendekatan kurikulum terpadu yang
                mengombinasikan Kurikulum Merdeka, yang merupakan kurikulum
                resmi pemerintah, dengan kurikulum internal sekolah yang
                dirancang khusus untuk mendukung kebutuhan peserta didik.
                Kurikulum ini dirancang untuk memberikan keseimbangan antara
                kebutuhan akademik dan keterampilan praktis, dengan fokus pada
                kegiatan praktik sebesar 70% dan teori sebesar 30%. Pendekatan
                ini bertujuan untuk memastikan siswa tidak hanya memahami konsep
                teoretis, tetapi juga mampu mengaplikasikannya dalam berbagai
                situasi nyata, terutama di dunia kerja.
              </p>
              <p className="mt-10 text-2xl indent-16 text-justify whitespace-normal">
                SMK Al Aqsyar menerapkan Kurikulum Merdeka yang dikombinasikan
                dengan kurikulum internal sekolah. Kurikulum ini fokus pada
                keseimbangan kegiatan praktik sebesar 70% dan teori 30%,
                sehingga siswa dapat menguasai keterampilan praktis sekaligus
                memahami konsep teoretis yang mendukung.
              </p>
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

export default Kurikulum;
