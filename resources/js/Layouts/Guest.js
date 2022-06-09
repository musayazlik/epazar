import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import {Link, Head} from '@inertiajs/inertia-react';

export default function Guest({children}) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="assets/image/Logo.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="assets/image/Logo.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="assets/image/Logo.png"/>

      </Head>
      <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div>
          <Link href="/">
            <img src="assets/image/Logo.png" alt="Logo" className="max-w-[150px]"/>
          </Link>
        </div>

        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
          {children}
        </div>
      </div>


    </>

  );
}
