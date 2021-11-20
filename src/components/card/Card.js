import React from "react";
import { Link } from "gatsby";

const Card = ({ name, picture, gender, age, noVirals, dewormed, id }) => {
  console.log(id, "hola card");
  return (
    <section className="text-gray-600 body-font  ">
      <div className="container px-5 py-24 mx-auto max-w-7x1 ">
        <div className="flex flex-wrap -m-4 sm:justify-center sm:flex sm:items-center ">
          <div className=" lg:w-4/5 md:w-4/5 sm:w-1/2  xs:w-full p-4  sm:flex sm:justify-center">
            <div className="bg-white p-6 ransition duration-500 transform  xs:w-full hover:scale-105 cursor-pointer">
              <img
                className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
                src={picture}
                alt={name}
              />
              <h2>{name}</h2>
              <div className="flex mt-4">
                <p className="text-md text-gray-900 font-medium title-font mb-4 mr-4">
                  Edad: {age}
                </p>
                <p className=" text-gray-900 text-md font-medium  title-font">
                  Género: {gender}
                </p>
              </div>
              <p className="leading-relaxed text-base">Virales: {noVirals}</p>
              <p className="leading-relaxed text-base">{dewormed}</p>
              <div className="flex justify-between px-10 py-6 md:justify-center">
                <Link to={`/${id}/`}>
                  <button className="bg-transparent hover:bg-violet text-violet font-semibold hover:text-white py-2 px-4 border border-violet hover:border-transparent rounded mr-4 md:w-1/2 md:text-xs md:w-4/5">
                    Adoptar
                  </button>
                </Link>
                <button className="bg-violet hover:bg-transparent text-white font-semibold hover:text-violet py-2 px-4 border border-violet hover:border-violet rounded mr-4 md:w-1/2 md:text-xs md:w-4/5 ">
                  Apadrinar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
