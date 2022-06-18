import React, {useState} from "react";
import {Link, Head} from "@inertiajs/inertia-react";
import Aside from "@/Components/Home/Aside/aside";
import Content from "@/Components/Home/Content/content";
import Basket from "@/Components/Home/basket";
import AsideMobile from "@/Components/Home/Aside/AsideMobile";

export default function Home(props) {
  const [open, setOpen] = useState(false);
  const [categoryId, setCategoryId] = useState(1);
  const [addToCart, setAddToCart] = useState([]);
  const [total, setTotal] = useState(0);
  console.log(addToCart);
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
      <div
        className=" flex justify-between h-[64px] text-white bg-gray-700 dark:bg-gray-900 items-center sm:pt-0 mb-20">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="logo">
              <img src="assets/image/HomeLogo.png" alt="logo" className="max-h-[64px]"/>
            </div>
            <div className=" flex items-center justify-center px-6 py-4">
              <div className="mr-6 mt-3">
                <button
                  onClick={() => setOpen(!open)}
                  className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
                  aria-label="Cart"
                >
                  <svg
                    className="h-8 w-8"
                    fill=""
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="#FFFFFF"
                  >
                    <path
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  <span className="absolute inset-0 object-right-top -mr-6  mt-1">
                <div
                  className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                  {addToCart.length}
                </div>
              </span>
                </button>
              </div>
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
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-center sm:grid sm:grid-cols-12 gap-x-9">
          <div className="col-span-5 xl:col-span-3 hidden sm:flex">
            <Aside
              props={{categoryId: categoryId, setCategoryId: setCategoryId}}
            />
          </div>
          <div className="col-span-7 xl:col-span-9 flex sm:hidden justify-center">
            <AsideMobile props={{categoryId: categoryId, setCategoryId: setCategoryId}} />
            <Content
              props={{
                categoryId: categoryId,
                setCategoryId: setCategoryId,
                addToCart: addToCart,
                setAddToCart: setAddToCart,
                total: total,
                setTotal: setTotal,
              }}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <Basket
          open={open}
          setOpen={setOpen}
          addToCart={addToCart}
          setAddToCart={setAddToCart}
          total={total}
          setTotal={setTotal}
        />
      </div>
    </>
  );
}
