import {Fragment, useEffect, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {XIcon} from "@heroicons/react/outline";
import StoreSelect from "@/Components/storeSelect";
import Swal from "sweetalert2";

const Basket = ({open, setOpen, addToCart, setAddToCart, total, setTotal}) => {
  const [products, setProducts] = useState([]);
  const [regions, setRegions] = useState([]);
  const [stores, setStores] = useState([]);
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    products: [],
    total: 0,
    region_id: null,
    store_id: null,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  /**
   * Region the data in the state
   */

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/regions")
      .then((res) => {
        setRegions(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  /**
   * Store the data in the state
   */

  const storeChange = (e) => {
    axios
      .get("/api/stores")
      .then((res) => {
        let filter = res.data.filter((store) => store.region_id == e.target.value);
        setStores(filter);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    setData({
      ...data,
      total: total,
    });
  }, [total]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addToCart.map(addToCart => {
        data.products.push(addToCart.id);
      }
    );

    axios
      .post("/api/orders", data)
      .then((res) => {
        setLoading(false);
        setAddToCart([]);
        setTotal(0);
        setData({
          name: "",
          email: "",
          message: "",
          products: [],
          total: 0,
          region_id: "",
          store_id: "",
        });

        setOpen(false);

        Swal.fire( {
          title: "Sipariş Tamamlandı.",
          text: "En kısa zamanda size dönüş yapacağız.",
          icon: "success",
          timer: 2500,
          showConfirmButton: false,
        });

      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <form onSubmit={(e) => {
                    handleSubmit(e)
                  }} className="h-full">


                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            {" "}
                            Sepet {" "}
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XIcon className="h-6 w-6" aria-hidden="true"/>
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {addToCart.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  <div
                                    className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={`storage/images/products/${product.image}`}
                                      alt={product.title}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href={product.href}>
                                            {" "}
                                            {product.title}{" "}
                                          </a>
                                        </h3>
                                        <p className="ml-4">{product.price} ₺</p>
                                      </div>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      {/*<p className="text-gray-500">Qty {product.quantity}</p>*/}

                                      <div onClick={() => {
                                        setAddToCart(addToCart.filter(item => product.id !== item.id))
                                      }} className="flex">
                                        <button onClick={() => {
                                          setTotal(total - product.price)
                                        }}
                                                type="button"
                                                className="font-medium text-white bg-red-600 px-3 py-1 shadow-lg shadow-red-600/60 rounded-md"
                                        >
                                          Sil
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 py-2 px-4 sm:px-6">
                        <div className="flex justify-around gap-x-4 ">
                          <div className="redion w-full">
                            <label forHtml="small"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Bölge</label>
                            <select id="small" name="region_id" onChange={(e) => {
                              handleChange(e)
                            }}
                                    className="block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
                              <option disabled selected>Bölge seçiniz...</option>
                              {regions.map((item, index) => (
                                <option key={index} onClick={(e) => {
                                  storeChange(e)
                                }} value={item.id}>{item.name}</option>
                              ))}


                            </select>
                          </div>
                          <div className="store w-full">
                            <StoreSelect props={{handleChange: handleChange, stores: stores, setStores: setStores}}/>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <div className="mb-3 xl:w-96">
                            <label
                              forHtml="name"
                              className="form-label inline-block mb-2 text-gray-700"
                            >
                              İsminiz
                            </label>
                            <input required
                                   onChange={(e) => {
                                     handleChange(e)
                                   }}
                                   type="text"
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
                                   id="name"
                                   placeholder="İsminizi giriniz..."
                                   name="name"
                                   value={data.name}
                            />
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <div className="mb-3 xl:w-96">
                            <label
                              forHtml="email"
                              className="form-label inline-block mb-2 text-gray-700"
                            >
                              E-mail
                            </label>
                            <input required
                                   onChange={(e) => {
                                     handleChange(e)
                                   }}
                                   type="email"
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
                                   id="email"
                                   placeholder="Mail adresinizi giriniz..."
                                   name="email"
                                   value={data.email}

                            />
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <div className="mb-3 xl:w-96">
                            <label
                              forHtml="message"
                              className="form-label inline-block mb-2 text-gray-700"
                            >
                              Sipariş Notu
                            </label>
                            <textarea
                              onChange={(e) => {
                                handleChange(e)
                              }}
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
                                 border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white border-2 focus:border-red-600 focus:outline-none
                              "
                              id="message"
                              rows="3"
                              placeholder="Siparişinizi giriniz..."
                              name="message"
                              value={data.message}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Hesap</p>
                          <p>{total} ₺</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Ödeme sırasında hesaplanan nakliye ve vergiler.
                        </p>
                        <div className="mt-6">
                          <button type="submit"
                                  href="#"
                                  className="flex items-center justify-center rounded-md border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700 w-full"
                          >
                            Siparişi Tamamla
                          </button>
                        </div>
                      </div>
                    </div>

                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Basket;
