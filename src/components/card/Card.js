import React from "react";
import { Link } from "gatsby";

const Card = ({ name, mainPhoto, gender, age, noVirals, dewormed, id }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto max-w-7x1 sm:w-full ">
        <div className="flex flex-wrap -m-4 sm:justify-center sm:flex md:justify-center md:items-center md:flex sm:items-center xs:w-full xs:flex xs:items-center xs:justify-center 2xs:flex 2xs:items-center 2xs:justify-center 2xs:w-full lg:w-full lg:justify-center lg:items-center">
          <div className="2xl:w-4/5 xl:w-4/5  lg:w-4/5 md:w-4/5 sm:w-4/5 xl:w-4/5  xs:w-4/5 2xs:w-4/5 p-4  sm:flex sm:justify-center md:flex md:justify-center md:items-center xl:flex xl:justify-center ">
            <div className="bg-white p-6 transition duration-500 transform   hover:scale-105 cursor-pointer sm:w-4/5 md:w-4/5 2xl:w-full md:w-full lg:w-full">
              <img
                className="2xl:h-64 2xs:h-auto lg:h-64 sm:h-64 xl:h-64 md:h-auto rounded w-full object-cover object-center mb-6"
                src={mainPhoto}
                alt={name}
              />
              <h2>{name}</h2>
              <div className="flex mt-4">
                <p className="text-md text-gray-900 font-medium title-font mb-4 mr-1.5">
                  Edad: {age}
                </p>
                <p className=" text-gray-900 text-md font-medium  title-font mr-2">
                  Género: {gender}
                </p>
              </div>
              <p className="leading-relaxed text-base">Virales: {noVirals}</p>
              <p className="leading-relaxed text-base">{dewormed}</p>
              <div className="flex justify-between px-10 py-6 md:justify-center xs:flex xs:justify-center 2xs:flex 2xs:flex-col 2xs:p-0 2xs:mt-4 2xl:flex 2xl:flex-row md:flex md:flex-row xs:flex xs:flex-row lg:flex lg:flex-row sm:flex sm:flex-row xl:flex xl:flex-row">
                <Link to={`/${id}/`} className="mr-4">
                  <button className="bg-transparent hover:bg-violet text-violet font-semibold hover:text-white py-2 px-4 border border-violet hover:border-transparent rounded mr-4 md:w-1/2 md:text-xs md:w-4/5 2xs:w-full 2xs:text-xs ">
                    Adoptar
                  </button>
                </Link>
                <Link to={`/${id}/`} className="mr-4">
                  <button className="bg-violet hover:bg-transparent text-white font-semibold hover:text-violet py-2 px-4 border border-violet hover:border-violet rounded mr-4 md:w-1/2 md:text-xs md:w-4/5  2xs:w-full 2xs:text-xs 2xs:mt-4 2xl:mt-0 md:mt-0 xs:mt-0 xl:mt-0 lg:mt-0 sm:mt-0">
                    Apadrinar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
