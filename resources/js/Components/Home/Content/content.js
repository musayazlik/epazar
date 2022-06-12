import React, {useEffect} from "react";
import {HiOutlineShoppingCart} from "react-icons/hi";
import axios from "axios";

function Content({props}) {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        const filter = res.data.filter(
          (item) => item.category == props.categoryId
        );
        setData(filter);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.categoryId]);

  return (
    <>
      <div className="grid grid-cols-3 gap-x-8 gap-y-8">
        {loading ? (
          <div className="col-span-3">
            <div className="flex justify-center">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        ) : (
          data.map((item, index) => (
            <div key={index} className="col-span-1">
              <div
                className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-lg shadow-gray-300/30 dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col justify-between">
                <div className="p-5">
                  <a href="#">
                    <img className="rounded-t-lg" src={item.image} alt=""/>
                  </a>
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                  </a>
                  <p className=" font-normal text-gray-700 dark:text-gray-400 mt-4 mb-6">
                    {item.description}
                  </p>
                </div>
                <div className="">
                  <div className="flex justify-between flex-col">
                    <span className=" px-6 font-bold text-2xl">
                      {item.price} TL
                    </span>
                    <div className="grid grid-cols-2 px-5 py-4">
                      <a
                        onClick={() =>
                        {props.setAddToCart(props.addToCart.concat(item)); props.setTotal(props.total + item.price) }
                        }
                        href="#"
                        className="inline-flex items-center justify-center py-2 px-3 text-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-400 dark:hover:bg-yellow-600 dark:focus:ring-yellow-800 text-xl gap-x-3 font-semibold"
                      >
                        <HiOutlineShoppingCart size={20}/> Satın Al
                      </a>
                      <div className="flex justify-center items-center">
                        <div className=" max-w-[80px]">
                          <input
                            type="number"
                            className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none
      "
                            id="exampleNumber0"
                            placeholder=""
                            max="20"
                            min="1"
                            defaultValue="1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Content;
