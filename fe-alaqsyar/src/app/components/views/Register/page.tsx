import Link from "next/link";
import bg from "../../../../../public/assets/home1.jpeg";
import Image from "next/image";

const Register = () => {
  return (
    <>
      <section className="shadow-lg relative">
        <div className="w-full h-screen flex flex-col justify-center items-center absolute z-10">
          <div className="w-2/3 max-w-lg h-auto flex flex-col justify-center items-center bg-white rounded-xl py-6 px-4 overflow-hidden shadow-md">
            {/* Logo */}
            <div className="w-2/3 flex justify-center items-center">
              <Image
                className="w-full h-full object-contain"
                src={"/assets/icon/logo_alaqsyar.png"}
                alt="Logo Al-Aqsyar"
                width={500}
                height={400}
                priority
              />
            </div>

            {/* Form */}
            <form className="w-full flex flex-col justify-center items-center">
              <div className="flex flex-col w-full mb-4">
                <label className="p-2 text-xl font-semibold" htmlFor="username">
                  Username
                </label>
                <input
                  className="p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="username"
                  placeholder="username"
                />
              </div>
              <div className="flex flex-col w-full mb-4">
                <label className="p-2 text-xl font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  className="p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  id="email"
                  placeholder="example@.com"
                />
              </div>
              <div className="flex flex-col w-full mb-4">
                <label className="p-2 text-xl font-semibold" htmlFor="password">
                  Password
                </label>
                <input
                  className="p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="password"
                  id="password"
                  placeholder="*****"
                />
              </div>
              <div className="flex flex-col w-full mb-4">
                <label
                  className="p-2 text-xl font-semibold"
                  htmlFor="Konfirmasipassword"
                >
                  Konfirmasi Password
                </label>
                <input
                  className="p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="password"
                  id="Konfirmasipassword"
                  placeholder="*****"
                />
              </div>
              <div className="flex w-full items-center mt-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-medium text-gray-900"
                >
                  Show Password
                </label>
              </div>
              <button className="w-full mt-6 bg-yellow-500 p-2 text-xl font-bold rounded-md text-white hover:bg-yellow-600 transition-all">
                REGISTER
              </button>
            </form>
          </div>
        </div>

        {/* Background */}
        <div
          className="w-full h-screen bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
      </section>
    </>
  );
};

export default Register;
