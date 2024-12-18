import Image from "next/image";
import logo from "../../../../../public/assets/logo.png";
import DropdownNavbar from "./DropdownNavbar/page";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="w-full bg-primary shadow-lg fixed z-50">
        <div className="w-full bg-indigo-900 shadow-sm pr-2 flex justify-between">
          <h1 className="p-2 text-white text-sm">
            SEKOLAH MENENGAH PERTAMA || SEKOLAH MENENGAH KEJURUAN
          </h1>
          <div className="flex items-center gap-1 cursor-pointer">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                clipRule="evenodd"
              />
            </svg>
            <h1 className="text-sm text-white">smkalaqsyar</h1>
          </div>
        </div>
        <div className="w-full h-16 flex justify-between pt-2 pb-2">
          <div className="flex w-1/2 gap-2">
            <Image
              className="w-14 h-14 object-contain pl-2 pb-2"
              src={logo}
              alt="logo"
              width={250}
              height={250}
            />
            <div>
              <h1 className="text-xl font-bold text-white tracking-widest">
                AL-AQSYAR
              </h1>
              <p className="text-sm text-white font-light">ISLAMIC SCHOOL</p>
            </div>
          </div>
          <div className="w-full pr-4 pl-4 flex">
            <ul className="flex w-full justify-between items-center gap-2 text-white">
              <li className="cursor-pointer hover:bg-indigo-950 rounded-md transition-all px-4 py-2 w-full flex justify-center items-center">
                <Link href="/">Beranda</Link>
              </li>
              <li className="w-full flex justify-center items-center">
                <DropdownNavbar
                  buttonLabel="Tentang Kami"
                  items={[
                    { label: "Visi Misi", href: "/visi-misi" },
                    { label: "Sejarah", href: "/sejarah" },
                    {
                      label: "Struktur Organisasi",
                      href: "/struktur-organisasi",
                    },
                    { label: "Fasilitas", href: "/fasilitas" },
                  ]}
                />
              </li>
              <li className="w-full flex justify-center items-center">
                <DropdownNavbar
                  buttonLabel="Akademik"
                  items={[
                    { label: "Kurikulum", href: "/kurikulum" },
                    { label: "Program", href: "/program" },
                    { label: "Jadwal Pelajaran", href: "/jadwal-pelajaran" },
                    { label: "Prestasi", href: "/prestasi" },
                  ]}
                />
              </li>
              <li className="cursor-pointer hover:bg-indigo-950 rounded-md transition-all px-4 py-2 w-full flex justify-center items-center">
                <Link href="/ppdb">PPDB</Link>
              </li>
              <li className="cursor-pointer hover:bg-indigo-950 rounded-md transition-all px-4 py-2 w-full flex justify-center items-center whitespace-nowrap">
                <Link href="/berita">Berita & Acara</Link>
              </li>
              <li className="cursor-pointer hover:bg-indigo-950 rounded-md transition-all px-4 py-2 w-full flex justify-center items-center">
                <Link href="/kontak">Kontak</Link>
              </li>
              <li className="cursor-pointer hover:bg-indigo-950 rounded-md transition-all px-4 py-2 w-full flex justify-center items-center">
                <Link href="/login" className="flex items-center text-white">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
