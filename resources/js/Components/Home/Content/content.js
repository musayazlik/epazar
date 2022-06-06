import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";

function Content() {
  return (
    <>
      <div className="grid grid-cols-3 gap-x-8 gap-y-8">
        <div className="col-span-1">
          <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-lg shadow-gray-300/30 dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="https://via.placeholder.com/400x300"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class=" font-normal text-gray-700 dark:text-gray-400 mt-4 mb-6">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>

              <div className="grid grid-cols-2">
                <a
                  href="#"
                  class="inline-flex items-center justify-center py-2 px-3 text-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-400 dark:hover:bg-yellow-600 dark:focus:ring-yellow-800 text-xl gap-x-3 font-semibold"
                >
                  <HiOutlineShoppingCart size={20} /> Satın Al
                </a>
                <div class="flex justify-center items-center">
                  <div class=" max-w-[80px]">
                    <input
                      type="number"
                      class="
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
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
    </>
  );
}

export default Content;
