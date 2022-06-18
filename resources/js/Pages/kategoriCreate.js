import React, {useEffect} from "react";
import Authenticated from "@/Layouts/Authenticated";
import {Head, Link} from "@inertiajs/inertia-react";

export default function KategoriEkle(props) {
    const [back, setBack] = React.useState(false);

  const newCategoryAdd = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", e.target.title.value);
    axios
      .post("/api/categories", formData)
      .then((res) => {
          console.log(res);
          if (back) {
            window.history.back();
          } else {
            null;
          }
        }
      )
      .catch((err) => {
          console.log(err);
        }
      );
  }

  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Kategori Ekle
        </h2>
      }
    >
      <Head title="Yeni Kategori"/>

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg py-8 px-6">
            <form onSubmit={(e) => {
              newCategoryAdd(e); setBack(true);
            }} enctype="multipart/form-data">
              <div className="grid gap-6 mb-6 max-w-[80%] lg:max-w-[50%]">
                <div>
                  <label forHtml="title"
                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kategori
                    Başlığı</label>
                  <input type="text" id="title"
                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         placeholder="Ürün başlığını giriniz..." name="title" required/>
                </div>


              </div>
              <button type="submit"
                      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Ekle
              </button>
            </form>

          </div>
        </div>
      </div>
    </Authenticated>
  );
}
