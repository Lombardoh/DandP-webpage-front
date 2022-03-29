import Head from 'next/head';
/*import Image from 'next/image';*/
import styles from '../styles/Index.module.css';
import { FaFacebookF, FaGoogle, FaEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Healthy Eats: your Diet Buddy</title>
        <link rel="icon" href="/.favicon.ico" />
      </Head>
      <main className="flex flex-col h-screen justify-center items-center w-full flex-1 p-14 text-center">
        {/*Sign in section*/}
        <div className="text-left bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold"></div>
            <span className="text-green-500">Healthy</span>Eats
          </div>
          <div className="py-20 px-20">
            <h2 className="text-3xl font-bold text-green-500 mb-2">
              Sign into your account
            </h2>
            <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
            <div className="flex justify-center my-2">
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaGoogle className="text-sm" />
              </a>
            </div>
            {/*Social login section*/}
            <p className="text-gray-400 my-3">or use your email account</p>
            <div className="flex flex-col item-center">
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center">
                <MdLockOutline className="text-gray-400 mr-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="bg-gray-100 outline-none text-sm flex-1"
                />
              </div>

              {/*El div de abajo corresponde al boton de Sign In*/}
              <div className="flex justify-between w-64 mb-8 pb-1">
                <label className="flex items-center text-xs">
                  <input type="checkbox" name="remember" className="mr-1" />
                  Remember me
                </label>
                <a href="#" className="text-xs">
                  Forgot Password?
                </a>
              </div>
              <a
                href="#"
                className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white text-center"
              >
                Sign in
              </a>
            </div>
          </div>

          {/*Sign up section*/}

          <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Fill up your info and start your healthy diet journey!
            </p>
            <a
              href="#"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500 "
            >
              Sign up
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
