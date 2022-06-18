import React, {useEffect} from "react";
import Authenticated from "@/Layouts/Authenticated";
import {Head, Link} from "@inertiajs/inertia-react";

export default function UrunEkle(props) {

  const [categorys, setCategorys] = React.useState([]);
  const [images, setImage] = React.useState();

  const changeHandler = (event) => {
    console.log(event.target.files);
  };


  useEffect(() => {
    axios
      .get("/api/categories")
      .then((res) => {
        setCategorys(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const newProductAdd = (e) => {
    e.preventDefault();

    console.log(e.target.category_id.value);

    const formData = new FormData();
    formData.append("title", e.target.title.value);
    formData.append("description", e.target.description.value);
    formData.append("price", e.target.price.value);
    formData.append("category_id", e.target.category_id.value);
    formData.append("image", e.target.image.files[0]);

    axios
      .post("/api/products", formData)
      .then((res) => {
          console.log(res);
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
          Ürün Ekle
        </h2>
      }
    >
      <Head title="Yeni Ürün"/>

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg py-8 px-6">
            <form onSubmit={(e) => {newProductAdd(e)}} enctype="multipart/form-data">
              <div className="grid gap-6 mb-6 max-w-[80%] lg:max-w-[50%]">
                <div>
                  <label forHtml="title"
                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ürün
                    Başlığı</label>
                  <input type="text" id="title"
                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         placeholder="Ürün başlığını giriniz..." name="title" required/>
                </div>
                <div>

                  <label forHtml="description"
                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Ürün
                    Tanımı</label>
                  <textarea id="description" rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Ürün tanımını giriniz..." name="description"></textarea>

                </div>
                <div>
                  <label forHtml="price"
                         className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ürün Fiyatı</label>
                  <input  type="number" id="price"
                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         placeholder="Ürün fiyatını giriniz..." name="price" required/>
                </div>

                <label forHtml="category_id"
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Ürün
                  Kategorisi</label>
                <select id="category_id"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name="category_id">
                  <option value="" selected>Kategori seçiniz</option>
                  {categorys.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>

                <div>

                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                         forHtml="image">Upload
                    file</label>
                  <input
                    className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="image" type="file" name="image" onChange={(event) => {changeHandler(event)}}/>
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
