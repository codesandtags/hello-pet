import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-20">
      <div className="container">
        <div>
          <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center">
            <div className="p-5 w-48 ">
              <div className="text-xs uppercase text-gray-500 font-medium">
                Home
              </div>
              <a className="my-3 block" href="/#">
                Adopciones <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Apadrinamiento{" "}
                <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Tienda <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Donaciones <span className="text-teal-600 text-xs p-1"></span>
              </a>
            </div>

            <div className="p-5 w-48 ">
              <div className="text-xs uppercase text-gray-500 font-medium">
                Más de nosotros
              </div>
              <a className="my-3 block" href="/#">
                Logros del 2021{" "}
                <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Fundaciones aliadas{" "}
                <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Veterinarias alíadas{" "}
                <span className="text-teal-600 text-xs p-1"></span>
              </a>
              <a className="my-3 block" href="/#">
                Nuestros heroes{" "}
                <span className="text-teal-600 text-xs p-1"></span>
              </a>
            </div>

            <div className="p-5 w-48 ">
              <div className="text-xs uppercase text-gray-500 font-medium">
                Contactanos
              </div>
              <a className="my-3 block" href="/#">
                <span className="material-icons">whatsapp</span>
              </a>
              <a className="my-3 block" href="/#">
                <span className="material-icons">facebook</span>
              </a>
              <a className="my-3 block" href="/#">
                <span className="material-icons">insta</span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 pt-2 ">
          <div
            className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      md:flex-row max-w-6xl"
          >
            <div className="mt-2">
              © Copyright 2021 Hello Pet - Made with ♥️{" "}
            </div>
            <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
              <a href="/#" className="w-6 mx-1"></a>
              <a href="/#" className="w-6 mx-1"></a>
              <a href="/#" className="w-6 mx-1"></a>
              <a href="/#" className="w-6 mx-1"></a>
              <a href="/#" className="w-6 mx-1"></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
