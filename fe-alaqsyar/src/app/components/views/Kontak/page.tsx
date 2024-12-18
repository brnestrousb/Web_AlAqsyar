import Image from "next/image";
import Link from "next/link";

const Kontak = () => {
  return (
    <>
      <section className="shadow-lg">
        <div className="w-full h-screen flex flex-col justify-center items-center absolute z-10">
          <h1 className="text-3xl font-bold tracking-widest">KONTAK</h1>
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

          <div className="flex flex-col justify-center items-center">
            <div
              className="w-full flex justify-center items-center h-96 gap-6 mt-20"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15856.986877776866!2d106.71378953955073!3d-6.490411900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c3be87d0ffcf%3A0x6b4b601cdd0893ab!2sSMP%20-%20SMK%20Al-AqSyar%20Islamic%20School!5e0!3m2!1sid!2sid!4v1734508976953!5m2!1sid!2sid"
                width="600"
                height="450"
                style={{ border: "0" }}
                allow=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="w-1/2 flex flex-col justify-start items-start">
              <h1 className="text-4xl font-bold">
                SMK Al-Aqsyar Islamic School
              </h1>
              <p className="text-xl">
                {" "}
                Jl. Parung Hijau I No. 27 Jampang Hambulu Rt. 01 Rw. 07 Desa
                Pondok Udik Kec. Kemang Kab. Bogor Provinsi Jawa Barat
              </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col w-full p-44">
            {/* Misi Section */}
            <div className="flex flex-col justify-center items-center mt-2">
              <div className="w-full flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold">HUBUNGI KAMI</h1>
                <h1 className="text-xl font-semibold mt-5">
                  INFO PENDAFTARAAN BISA HUBUNGI DIBAWAH INI
                </h1>
              </div>
              <div className="w-full grid grid-cols-2 justify-items-center gap-10 mt-10">
                <div className="w-72 p-6 h-full shadow-xl border-1 rounded-lg">
                  <Image
                    src={"/assets/icon/call.png"}
                    alt=""
                    width={350}
                    height={350}
                  />
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-xl font-bold text-blue-500">
                      Alwan Abdurrahman S.E
                    </h1>
                    <h2 className="text-2xl">0812-9088-7511</h2>
                  </div>
                </div>
                <div className="w-72 p-6 h-full shadow-xl border-1 rounded-lg">
                  <Image
                    src={"/assets/icon/support.png"}
                    alt=""
                    width={350}
                    height={350}
                  />
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-xl font-bold text-blue-500">
                      Admin PPDB Online
                    </h1>
                    <h2 className="text-2xl">0851-7962-7855</h2>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col justify-center items-center mt-28 mb-20">
                <h1 className="text-4xl font-semibold">SOSIAL MEDIA KAMI</h1>
              </div>
              <div className="w-full grid grid-cols-2 justify-items-center gap-10 mt-10">
                <div className="w-72 p-10 h-full shadow-xl border-1 rounded-lg">
                  <Image
                    src={"/assets/icon/instagram.png"}
                    alt=""
                    width={250}
                    height={250}
                  />
                  <div className="flex flex-col justify-center items-center mt-10">
                    <h1 className="text-xl font-bold text-blue-500">
                      Instagram
                    </h1>
                    <Link
                      href={"https://instagram.com/smkalaqsyar"}
                      className="text-2xl font-semibold"
                    >
                      smkalaqsyar
                    </Link>
                  </div>
                </div>
                <div className="w-72 p-10 h-full shadow-xl border-1 rounded-lg">
                  <Image
                    src={"/assets/icon/facebook.png"}
                    alt=""
                    width={250}
                    height={250}
                  />
                  <div className="flex flex-col justify-center items-center mt-10">
                    <h1 className="text-xl font-bold text-blue-500">
                      Facebook
                    </h1>
                    <Link
                      href={"https://www.facebook.com/smkalaqsyar"}
                      className="text-2xl font-semibold"
                    >
                      SMK Al-AqSyar
                    </Link>
                  </div>
                </div>
                <div className="w-72 p-10 h-full shadow-xl border-1 rounded-lg">
                  <Image
                    src={"/assets/icon/tiktok.png"}
                    alt=""
                    width={250}
                    height={250}
                  />
                  <div className="flex flex-col justify-center items-center mt-10">
                    <h1 className="text-xl font-bold text-blue-500">Tiktok</h1>
                    <Link
                      href={"https://www.tiktok.com/@smkalaqsyar"}
                      className="text-2xl font-semibold"
                    >
                      smkalaqsyar
                    </Link>
                  </div>
                </div>
                <div className="w-72 p-10 h-full shadow-xl border-1 rounded-lg">
                  <Image
                    src={"/assets/icon/youtube.png"}
                    alt=""
                    width={250}
                    height={250}
                  />
                  <div className="flex flex-col justify-center items-center mt-10">
                    <h1 className="text-xl font-bold text-blue-500">Youtube</h1>
                    <Link
                      href={"https://www.youtube.com/@smkalaqsyar"}
                      className="text-2xl font-semibold"
                    >
                      SMK Al-Aqsyar
                    </Link>
                  </div>
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
    </>
  );
};

export default Kontak;
