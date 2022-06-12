import React, {useEffect, useState} from 'react';


const storeSelect = ({props}) => {


  return (
    <>
      <label forHtml="small"
             className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Mağaza</label>
      <select id="small" name="store_id" onChange={(e) => {
        props.handleChange(e)
      }}
              className="block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500">
        <option disabled selected>Mağaza seçiniz...</option>
        {props.stores.map((item,index) => (
          <option key={index} value={item.id} >{item.name}</option>
        ))}

      </select>
    </>
  )

}

export default storeSelect;
