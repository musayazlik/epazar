import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import axios from "axios";

export default function Siparisler(props) {
  const [siparisler, setSiparisler] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get("/api/orders")
      .then((res) => {
        setSiparisler(res.data);
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
          Siparişler
        </h2>
      }
    >
      <Head title="Siparisler" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 hover:bg-gray-600">
                  <thead className="text-xs text-white uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        İsim
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3"
                      >
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Adres
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Sipariş Notu
                      </th>
                      <th scope="col" className="px-6 py-3"></th>
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
                          className="bg-white dark: hover:bg-gray-300 duration-200"
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
                            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                          >
                            {urun.title}
                          </th>
                          <td className="px-6 py-4">{urun.price}</td>
                          <td className="px-6 py-4">
                            {urun.description.length > 160
                              ? urun.description.slice(0, 160) + "..."
                              : urun.description}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button
                              type="button"
                              className="focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm  py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 px-10 shadow-lg shadow-green-500/40"
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm  py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 px-8 shadow-lg shadow-red-500/40"
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
