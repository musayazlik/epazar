import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import axios from "axios";

export default function Urunler(props) {
  const [urunler, setUrunler] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        setUrunler(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Ürünler
        </h2>
      }
    >
      <Head title="Ürünler" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="w-full flex justify-end">
              <div role="button" className="createProduct ">
                <Link
                  className="block focus:outline-none text-white
                      bg-yellow-400 hover:bg-yellow-500 focus:ring-4
                      focus:ring-yellow-300 font-medium rounded-lg text-sm
                      py-2.5 my-3 dark:bg-yellow-600
                      dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 px-8
                      shadow-lg shadow-yellow-500/60 mt-6 mr-8"
                  href={route("urunCreate")}
                >
                  Create Product
                </Link>
              </div>
            </div>
            <div className="p-6 bg-white border-b border-gray-200">
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 hover:bg-gray-600">
                  <thead class="text-xs text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Resim
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 break-normal text-nowrap whitespace-nowrap"
                      >
                        Başlık
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Fiyat
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Kategori
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Tanım
                      </th>
                      <th scope="col" class="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan="6" className="text-center">
                          <div
                            className="spinner-border text-yellow-600"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      urunler.map((urun, index) => (
                        <tr
                          key={index}
                          class="bg-white dark: hover:bg-gray-300 duration-200"
                        >
                          <td className="px-6 py-4">
                            <img
                              src={`${urun.image}`}
                              alt="product"
                              className="h-12 w-12"
                            />
                          </td>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                          >
                            {urun.title}
                          </th>
                          <td class="px-6 py-4">{urun.price}</td>
                          <td class="px-6 py-4">{urun.category}</td>
                          <td class="px-6 py-4">
                            {urun.description.length > 160
                              ? urun.description.slice(0, 160) + "..."
                              : urun.description}
                          </td>
                          <td class="px-6 py-4 text-right">
                            <button
                              type="button"
                              class="focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm  py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 px-10 shadow-lg shadow-green-500/40"
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              class="focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm  py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 px-8 shadow-lg shadow-red-500/40"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
}
