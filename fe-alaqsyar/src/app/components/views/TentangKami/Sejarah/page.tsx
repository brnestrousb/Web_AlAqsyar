const Sejarah = () => {
  return (
    <>
      <section className="shadow-lg">
        <div className="w-full h-screen flex flex-col justify-center items-center absolute z-10">
          <h1 className="text-3xl font-bold tracking-widest">SEJARAH</h1>
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
              <h1 className="text-4xl font-bold">Sejarah</h1>
              <p className="mt-10 text-2xl indent-16 text-justify whitespace-normal">
                <b>SMK Al Aqsyar</b> pertama kali didirikan pada tahun 1999 oleh
                Almarhum Bapak Tutun Am Badar, seorang pendidik yang memiliki
                visi untuk memajukan generasi muda melalui pendidikan kejuruan
                berbasis nilai-nilai Islam dan profesionalisme. Pada awal
                berdirinya, sekolah ini dikenal dengan nama Citra Bangsa.
              </p>
              <p className="mt-10 text-2xl indent-16 text-justify whitespace-normal">
                Seiring waktu, untuk mengukuhkan identitas sebagai sekolah yang
                berbasis pendidikan Islam, nama sekolah diubah menjadi Citra
                Bangsa Islamic School. Transformasi ini menandai komitmen
                pendiri dalam mengintegrasikan nilai-nilai keislaman dalam
                kurikulum dan pembelajaran.
              </p>
              <p className="mt-10 text-2xl indent-16 text-justify whitespace-normal">
                Pada tahun 2021, nama sekolah kembali mengalami perubahan
                menjadi <b>Al Aqsyar</b> Islamic School. Perubahan ini menjadi
                tonggak baru dalam perjalanan sekolah untuk lebih mencerminkan
                visi dan misinya dalam mencetak generasi muda yang cerdas,
                berakhlak mulia, dan kompeten di berbagai bidang.
              </p>
              <p className="mt-10 text-2xl indent-16 text-justify whitespace-normal">
                Saat ini,<b> SMK Al Aqsyar</b> dikelola oleh Yayasan Ambadar
                yang dipimpin oleh putri pendiri, Ibu Nadia Am Badar. Dengan
                penuh dedikasi, beliau melanjutkan perjuangan sang ayah untuk
                menjaga kualitas pendidikan dan menyesuaikannya dengan kebutuhan
                dunia modern. Yayasan Ambadar terus mendukung pengembangan
                berbagai program unggulan yang fokus pada keterampilan praktis,
                pembinaan karakter, dan kompetensi siswa di dunia industri
                maupun pendidikan tinggi.
              </p>
              <p className="mt-10 text-2xl indent-16 text-justify whitespace-normal">
                Dengan perjalanan panjangnya, <b>SMK Al Aqsyar</b> tetap
                berkomitmen untuk menjadi lembaga pendidikan yang membanggakan,
                menghasilkan lulusan yang berdaya saing tinggi serta mampu
                berkontribusi positif bagi keluarga, masyarakat, dan bangsa.
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

export default Sejarah;
