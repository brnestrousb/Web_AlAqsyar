import Image from "next/image";
import logo from "../../../../../public/assets/logo.png"

const Navbar = () => {
    return (
      <>
        <nav className="w-full bg-indigo-400 shadow-lg">
          <div className="w-full bg-indigo-500 shadow-sm">
            <h1 className="p-2 text-white text-sm">
              SEKOLAH MENENGAH KEJURUAN
            </h1>
          </div>
          <div className="w-full h-16 flex justify-between mt-2">
            <div className="flex gap-2">
              <Image
                className="w-24 h-18 object-contain pl-2 pb-2"
                src={logo}
                alt="logo"
                width={150}
                height={150}
              />
              <div>
              <h1 className="text-xl font-bold text-white tracking-widest">
                AL-AQSYAR
              </h1>
                <p className="text-sm text-white font-light">ISLAMIC SCHOOL</p>
              </div>
            </div>
            <div className="pr-8 flex justify-center items-center">
              <ul className="flex gap-8 text-white">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Profile</li>
                <li className="cursor-pointer">Kesiswaan</li>
                <li className="cursor-pointer">Prestasi</li>
                <li className="cursor-pointer">PPDB</li>
                <li className="cursor-pointer">Kontak</li>
                <li className="cursor-pointer">Login</li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
}

export default Navbar;