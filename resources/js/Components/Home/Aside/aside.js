import React from "react";
import axios from "axios";
import { Link } from "@inertiajs/inertia-react";

function Aside({ props }) {
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
      <div className="container mx-auto">
        <ul class="w- text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li class="w-full px-4 py-4 text-xl font-semibold border-b border-gray-200 rounded-t-lg bg-gray-700 text-white ">
            Kategoriler
          </li>
          {data.map((item) => (
            <li
              onClick={() => {
                props.setCategoryId(item.id);
              }}
              class={`w-full px-4 py-4 text-xl font-semibold hover:border-b border-b hover:border-red-600 border-gray-200 dark:border-gray-600 hover:bg-red-600 hover:text-white duration-200 cursor-pointer ${
                item.id === props.categoryId
                  ? "bg-red-600 text-white"
                  : "bg-white"
              } `}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Aside;
