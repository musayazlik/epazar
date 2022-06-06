import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Aside from "@/Components/Home/Aside/aside";
import Content from "@/Components/Home/Content/content";

export default function Welcome(props) {
  return (
    <>
      <Head title="E-Pazar Hoşgeldiniz">
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="assets/image/Logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="assets/image/Logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="assets/image/Logo.png"
        />
      </Head>
      <div className="relative flex items-top justify-center h-[64px] text-white bg-gray-700 dark:bg-gray-900 sm:items-center sm:pt-0 mb-20">
        <div className="fixed top-0 right-0 px-6 py-4 sm:block">
          {props.auth.user ? (
            <Link
              href={route("dashboard")}
              className="bg-gray-900 hover:bg-red-800 text-white font-semibold hover:text-white py-2 px-4  border-red-600 border-2 rounded duration-200 text-lg"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                href={route("login")}
                className="bg-gray-900 hover:bg-red-800 text-white font-semibold hover:text-white py-2 px-4  border-red-600 border-2 rounded duration-200 text-lg hover:shadow-md hover:shadow-red-700/50"
              >
                Log in
              </Link>

              <Link
                href={route("register")}
                className="ml-4  text-white underline-offset-0 hover:text-red-600 duration-200 text-lg"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-x-9">
          <div className="col-span-3">
            <Aside />
          </div>
          <div className="col-span-9">
            <Content />
          </div>
        </div>
      </div>
    </>
  );
}
