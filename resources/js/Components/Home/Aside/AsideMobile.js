import React from "react";
import axios from "axios";
import {Link} from "@inertiajs/inertia-react";

function AsideMobile({props}) {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get("/api/categories")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(props.categoryId);

  return (
    <>
      <div className="container mx-auto mb-6">
        <ul
          className="w- text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">

          <label forHtml="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
            <li
              className="w-full px-4 py-4 text-xl font-semibold border-b border-gray-200 rounded-t-lg bg-gray-700 text-white ">
              Kategoriler
            </li>
          </label>
          <select id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
            {data.map((item) => (
              <option id={item.id} value={item.id} onChange={() => {
                props.setCategoryId(item.id);
              }}> {item.name} </option>
            ))}
            }
          </select>
        </ul>
      </div>
    </>
  );
}

export default AsideMobile;
