import React from "react";

const Footer = () => {
  return (
    <footer class="bg-gray-100 mt-20">
      <div className="container">
        <div>
          <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center">
            
            <div class="p-5 w-48 ">
              <div class="text-xs uppercase text-gray-500 font-medium">
                Home
              </div>
              <a class="my-3 block" href="/#">
                Adopciones <span class="text-teal-600 text-xs p-1"></span>
              </a>
              <a class="my-3 block" href="/#">
                Apadrinamiento <span class="text-teal-600 text-xs p-1"></span>
              </a>
              <a class="my-3 block" href="/#">
                Tienda <span class="text-teal-600 text-xs p-1"></span>
              </a>
              <a class="my-3 block" href="/#">
                Donaciones <span class="text-teal-600 text-xs p-1"></span>
              </a>
            </div>

            <div class="p-5 w-48 ">
              <div class="text-xs uppercase text-gray-500 font-medium">
                Más de nosotros
              </div>
              <a class="my-3 block" href="/#">
                Logros del 2021 <span class="text-teal-600 text-xs p-1"></span>
              </a>
              <a class="my-3 block" href="/#">
                Fundaciones aliadas <span class="text-teal-600 text-xs p-1"></span>
              </a>
              <a class="my-3 block" href="/#">
                Veterinarias alíadas <span class="text-teal-600 text-xs p-1"></span>
              </a>
              <a class="my-3 block" href="/#">
                Nuestros heroes <span class="text-teal-600 text-xs p-1"></span>
              </a>
            </div>

            <div class="p-5 w-48 ">
              <div class="text-xs uppercase text-gray-500 font-medium">
                Contactanos
              </div>
              <a class="my-3 block" href="/#">
                <span class="material-icons">whatsapp</span>
              </a>
              <a class="my-3 block" href="/#">
                <span class="material-icons">facebook</span>
              </a>
              <a class="my-3 block" href="/#">
                <span class="material-icons">insta</span>
              </a>
            </div>
          </div>
        </div>

        <div class="bg-gray-100 pt-2 ">
          <div
            class="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      md:flex-row max-w-6xl"
          >
            <div class="mt-2">© Copyright 2021 Hello Pet - Made with ♥️ </div>
            <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
              <a href="/#" class="w-6 mx-1">
                
              </a>
              <a href="/#" class="w-6 mx-1">
                
              </a>
              <a href="/#" class="w-6 mx-1">
                
              </a>
              <a href="/#" class="w-6 mx-1">
                
              </a>
              <a href="/#" class="w-6 mx-1">
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
