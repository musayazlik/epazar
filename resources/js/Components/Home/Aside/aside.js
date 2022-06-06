import React from "react";

function Aside() {
  return (
    <>
      <div className="container mx-auto">
        <ul class="w- text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li class="w-full px-4 py-4 text-xl font-semibold border-b border-gray-200 rounded-t-lg bg-gray-700 text-white ">
            Kategoriler
          </li>
          <li class="w-full px-4 py-4 text-xl font-semibold border-b border-gray-200 dark:border-gray-600 hover:bg-red-600 hover:text-white duration-200 cursor-pointer">
            Et Ürünleri
          </li>
          <li class="w-full px-4 py-4 text-xl font-semibold border-b border-gray-200 dark:border-gray-600 hover:bg-red-600 hover:text-white duration-200 cursor-pointer">
            Bakliyat Ürünleri
          </li>
          <li class="w-full px-4 py-4 text-xl font-semibold border-b border-gray-200 dark:border-gray-600 hover:bg-red-600 hover:text-white duration-200 cursor-pointer">
            Atıştırmalık Ürünler
          </li>
        </ul>
      </div>
    </>
  );
}

export default Aside;
