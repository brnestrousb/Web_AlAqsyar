"use client";
import CarouselCard from "../../fragments/CaraouselCard/page";
import dynamic from "next/dynamic";

const CalenderAkademik = dynamic(() => import("./CalenderAkademik/page"), {
  ssr: false,
});

const Berita = () => {
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
      title: "KUNJUNGAN KEUANGAN & LEMBAGA",
      description: "Lorem ipsum dolor sit, amet cing elit.",
      link: "/news/akutansi-keuangan",
    },
  ];

  const holidays = ["2024-07-07", "2024-08-17", "2024-12-25", "2024-12-26"];

  return (
    <>
      <section>
        <div className="w-full h-full p-10">
          <h1 className="text-3xl mt-20">Berita Terbaru</h1>
          <div className="flex justify-center items-center gap-10 mt-5">
            <div className="flex w-full flex-col gap-3">
              <div className="bg-yellow-400 h-1"></div>
              <div className="bg-yellow-400 h-1"></div>
            </div>
          </div>
          <div className="w-full h-full mt-10">
            <CarouselCard slides={slidesData} />
          </div>
          <div className="w-full h-full mt-10 pt-10">
            <div className="w-full h-full flex flex-col">
              <h1 className="text-3xl">
                KALENDER PENDIDIKAN SMK AL AQSYAR TAHUN PELAJARAN 2024/2025
              </h1>
              <div className="flex justify-center items-center gap-10 mt-5">
                <div className="flex w-full flex-col gap-3">
                  <div className="bg-yellow-400 h-1"></div>
                  <div className="bg-yellow-400 h-1"></div>
                </div>
              </div>
              <div className="w-full h-full flex flex-col justify-center items-center pt-8">
                <CalenderAkademik holidays={holidays} />
                <div className="w-full mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg shadow-sm p-4 bg-gray-100">
                      <h2 className="text-lg font-semibold text-gray-700">
                        15 Juli 2024
                      </h2>
                      <p className="text-gray-600">
                        Hari pertama masuk sekolah
                      </p>
                    </div>
                    <div className="border rounded-lg shadow-sm p-4 bg-gray-100">
                      <h2 className="text-lg font-semibold text-gray-700">
                        15 - 17 Juli 2024
                      </h2>
                      <p className="text-gray-600">
                        Pengenalan Lingkungan Sekolah
                      </p>
                    </div>
                    <div className="border rounded-lg shadow-sm p-4 bg-gray-100">
                      <h2 className="text-lg font-semibold text-gray-700">
                        7 Juli 2024
                      </h2>
                      <p className="text-gray-600">
                        Libur Tahun Baru Islam 1446 H
                      </p>
                    </div>
                    <div className="border rounded-lg shadow-sm p-4 bg-gray-100">
                      <h2 className="text-lg font-semibold text-gray-700">
                        7 , 14, 21, 28 Juli 2024
                      </h2>
                      <p className="text-gray-600">
                        Kegiatan Komunitas Belajar Internal
                      </p>
                    </div>
                    <div className="border rounded-lg shadow-sm p-4 bg-gray-100">
                      <h2 className="text-lg font-semibold text-gray-700">
                        14 Agustus 2024
                      </h2>
                      <p className="text-gray-600">
                        Pertemuan Pramuka Pendidikan Khusus
                      </p>
                    </div>
                    <div className="border rounded-lg shadow-sm p-4 bg-gray-100">
                      <h2 className="text-lg font-semibold text-gray-700">
                        17 Agustus 2024
                      </h2>
                      <p className="text-gray-600">
                        Libur hari Proklamasi Kemerdekaan RI
                      </p>
                    </div>
                    <div className="border rounded-lg shadow-sm p-4 bg-gray-100">
                      <h2 className="text-lg font-semibold text-gray-700">
                        19 - 22 Agustus 2024
                      </h2>
                      <p className="text-gray-600">
                        Pelaksanaan Asessmen Nasional SMA/SMK/SMALB dan yang
                        Sederajat
                      </p>
                    </div>
                    <div className="border rounded-lg shadow-sm p-4 bg-gray-100">
                      <h2 className="text-lg font-semibold text-gray-700">
                        9 - 12 September 2024
                      </h2>
                      <p className="text-gray-600">Sumatif Harian</p>
                    </div>
                    <div className="border rounded-lg shadow-sm p-4 bg-gray-100">
                      <h2 className="text-lg font-semibold text-gray-700">
                        16 September 2024
                      </h2>
                      <p className="text-gray-600">
                        Libur Maulid Nabi Muhammad SAW
                      </p>
                    </div>
                    <div className="border rounded-lg shadow-sm p-4 bg-gray-100">
                      <h2 className="text-lg font-semibold text-gray-700">
                        20 September 2024
                      </h2>
                      <p className="text-gray-600">Karimat</p>
                    </div>
                    <div className="border rounded-lg shadow-sm p-4 bg-gray-100">
                      <h2 className="text-lg font-semibold text-gray-700">
                        25 November 2024
                      </h2>
                      <p className="text-gray-600">
                        Porseni Guru Pendidikan Khusus
                      </p>
                    </div>
                    <div className="border rounded-lg shadow-sm p-4 bg-gray-100">
                      <h2 className="text-lg font-semibold text-gray-700">
                        3 Desember 2024
                      </h2>
                      <p className="text-gray-600">
                        Hari Disabilitas Internasional
                      </p>
                    </div>
                    <div className="border rounded-lg shadow-sm p-4 bg-gray-100">
                      <h2 className="text-lg font-semibold text-gray-700">
                        2 - 14 Desember 2024
                      </h2>
                      <p className="text-gray-600">
                        Prakiraan Penilaian Sumatif Akhir Semester
                      </p>
                    </div>
                    <div className="border rounded-lg shadow-sm p-4 bg-gray-100">
                      <h2 className="text-lg font-semibold text-gray-700">
                        20 Desember 2024
                      </h2>
                      <p className="text-gray-600">
                        Tanggal Penetapan Rapor Semester 1
                      </p>
                    </div>
                    <div className="border rounded-lg shadow-sm p-4 bg-gray-100">
                      <h2 className="text-lg font-semibold text-gray-700">
                        20/21 Desember 2024
                      </h2>
                      <p className="text-gray-600">
                        Pembagian Rapor Semester 1
                      </p>
                    </div>
                    <div className="border rounded-lg shadow-sm p-4 bg-gray-100">
                      <h2 className="text-lg font-semibold text-gray-700">
                        25 Desember 2024
                      </h2>
                      <p className="text-gray-600">Libur Hari Natal</p>
                    </div>
                    <div className="border rounded-lg shadow-sm p-4 bg-gray-100">
                      <h2 className="text-lg font-semibold text-gray-700">
                        26 Desember 2024
                      </h2>
                      <p className="text-gray-600">Cuti Bersama Hari Natal</p>
                    </div>
                    <div className="border rounded-lg shadow-sm p-4 bg-gray-100">
                      <h2 className="text-lg font-semibold text-gray-700">
                        23 Desember 2024 - 4 Januari 2025
                      </h2>
                      <p className="text-gray-600">Libur Semester 1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Berita;
