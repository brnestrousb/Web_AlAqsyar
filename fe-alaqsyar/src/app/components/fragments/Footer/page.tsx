import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="bg-indigo-500 gap-2">
        <div className="w-full h-80  grid grid-cols-4">
          <div className="flex flex-col p-8 col-span-2">
            <h1 className="text-3xl text-white font-bold flex gap-1">
              <span>
                <svg
                  className="w-10 h-10 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Location
            </h1>
            <p className="text-white text-xl mt-4">
              Jl. Parung Hijau I No. 27 Jampang Hambulu Rt. 01 Rw. 07 Desa
              Pondok Udik Kec. Kemang Kab. Bogor Provinsi Jawa Barat
            </p>
          </div>
          <div className="flex flex-col w-full p-8">
            <h1 className="text-3xl text-white font-bold text-left w-full">
              Quick Link
            </h1>
            <ul className="flex flex-col gap-1 text-white w-full mt-4 list-disc list-inside">
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Galeri</a>
              </li>
              <li>
                <a href="#">PPDB</a>
              </li>
              <li>
                <a href="#">Visi Misi</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <Image
              className="w-52 h-52 object-contain"
              src="/assets/logo.png"
              alt="logo"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="flex justify-center items-center bg-indigo-900 w-full h-10">
          <p className="text-center text-white text-sm">
            Copyright © 2024 Al-Aqsyar. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
