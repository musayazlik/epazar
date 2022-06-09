import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
function UrunCreate(props) {
  return (
    <>
      <Authenticated
        auth={props.auth}
        errors={props.errors}
        header={
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Ürün Ekle
          </h2>
        }
      >
        <Head title="Ürün Ekle" />
        <div>asfeılsjtg9er8pgherhjuoıerherjklhgeg</div>
      </Authenticated>
    </>
  );
}

export default UrunCreate;
