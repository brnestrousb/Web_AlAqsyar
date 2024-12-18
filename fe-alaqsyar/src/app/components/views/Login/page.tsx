import Link from "next/link";
import bg from "../../../../../public/assets/home1.jpeg";
import Image from "next/image";

const Login = () => {
  return (
    <>
      <section className="shadow-lg relative">
        <div className="w-full h-screen flex flex-col justify-center items-center absolute z-10">
          <div className="w-2/5 max-w-lg h-3/4 flex flex-col justify-center items-center bg-white rounded-xl">
            <div className="w-2/3 h-1/4 flex justify-center items-center">
              <Image
                className="w-full h-full object-cover"
                src={"/assets/icon/logo_alaqsyar.png"}
                alt=""
                width={500}
                height={500}
              />
            </div>
            <form
              className="w-full px-6 flex flex-col justify-center items-center"
              action=""
            >
              <div className="flex flex-col w-full">
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
              <div className="flex flex-col w-full">
                <label className="p-2 text-xl font-semibold" htmlFor="password">
                  Password
                </label>
                <input
                  className="p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="password"
                  id="password"
                  placeholder="password"
                />
              </div>
              <div className="flex w-full items-center mt-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-800"
                >
                  Show Password
                </label>
              </div>
              <button className="w-full mt-6 bg-yellow-500 p-2 text-xl font-bold rounded-md text-white hover:bg-yellow-600 transition-all">
                LOGIN
              </button>
            </form>
            <h1 className="text-xl font-bold mt-4">JIKA BELUM TERDAFTAR</h1>
            <Link
              className="text-blue-500 hover:underline transition-all"
              href="/register"
            >
              DAFTAR DISINI
            </Link>
          </div>
        </div>
        <div
          className="w-full h-screen bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
      </section>
    </>
  );
};

export default Login;
