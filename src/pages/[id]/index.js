import React, { useState, useEffect } from "react";
import { navigate } from "gatsby-link";
import Error from "../../components/errors/Error";

const PetId = ({ id }) => {
  const [pet, setPet] = useState(undefined);
  const [handleError, setHandleError] = useState(200);

  useEffect(() => {
    fetch("../../model/foundation.json")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 404) {
          setHandleError(404);
        } else {
          setHandleError(500);
        }
      })
      .then((response) => {
        const { foundationName } = response;
        const findPet = foundationName[0].pets.find(
          (pet) => pet.id === Number(id)
        );
        setPet(findPet);
        if (!findPet || typeof findPet === undefined) {
          setHandleError(404);
        }
      })
      .catch((error) => {
        console.log(error);
        setHandleError(500);
      });
  }, []);

  return (
    <div className="container">
      {pet && (
        <main className="bg-gray-100 mx-auto space-y-2  min-h-screen m-20">
          <div className="flex flex-col m-20 sm:m-14">
            <div className="flex justify-end">
              <button
                onClick={() => navigate("/")}
                className="px-24 bg-violet hover:bg-transparent text-white font-semibold hover:text-violet  border border-violet hover:border-violet rounded  md:text-lg w-15 mt-14 h-8 md:w-1/4 md:h-1/4 md:px-0 xs:text-xs sm:mt-0 sm:w-full sm:p-3 2xl:mt-4 xl:mt-4 lg:mt-4 md:mt-4"
              >
                Volver al inicio
              </button>
            </div>
            <div className=" flex-1 flex items-center justify-center m-7 sm:mt-16">
              <h2 className="text-7xl">{pet.name}</h2>
            </div>
          </div>
          <div className="pl-14 md:pl-9">
            <div className="flex flex-wrap md:w-3/5 sm:w-4/5">
              <div className="flex md:flex-auto md:mt-4">
                <p className="text-2xl text-gray-900 font-medium title-font sm:text-xl">
                  Tipo de Mascota:
                </p>
                <p className="text-2xl  sm:text-xl mr-4 ml-2">{pet.type}</p>
              </div>
              <div className="flex md:flex-auto md:mt-4">
                <p className="text-2xl sm:text-xl text-gray-900 font-medium title-font">
                  Edad:
                </p>
                <p className="text-2xl sm:text-xl mr-4 ml-2">{pet.age}</p>
              </div>
              <div className="flex md:flex-auto md:mt-4">
                <p className="text-2xl sm:text-xl text-gray-900 font-medium title-font">
                  Género:
                </p>
                <p className="text-2xl sm:text-xl mr-4 ml-2">{pet.gender}</p>
              </div>
              <div className="flex md:flex-auto  md:mt-4">
                <p className="text-2xl sm:text-xl text-gray-900 font-black title-font">
                  Color:
                </p>
                <p className="text-2xl sm:text-xl mr-4 ml-2">{pet.color}</p>
              </div>
            </div>
            <div className="flex  flex-col md:mt-6">
              <p className="text-2xl sm:text-xl pt-4">{pet.dewormed}</p>
              <p className="text-2xl sm:text-xl pt-4">{pet.sterilized}</p>
              <div className="flex pt-4">
                <p className="text-2xl sm:text-xl text-gray-900 font-medium title-font mb-4 ">
                  No Virales:
                </p>
                <p className="text-2xl sm:text-xl">{pet.noVirals}</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl text-gray-900 font-medium title-font mb-4 mr-4 mt-10 font-black text-4xl">
                Historia
              </h3>
              <p className="text-2xl sm:text-xl">{pet.history}</p>

              {pet.gallery.map((element, id) => {
                return (
                  <div
                    key={id}
                    className="mt-12 flex flex-row justify-center items-center "
                  >
                    <img
                      src={element.url}
                      width="450"
                      height="450"
                      className="sm:w-4/5 sm:h-4/5 2xl:w-3/5 xl:w-3/5 lg:w-3/5 "
                      alt={element.alt}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex pt-12">
              <p className="text-2xl sm:text-xl font-black ">Cualidades:</p>
              <p className="text-2xl sm:text-xl ml-2 sm:w-4/5">
                {pet.qualities}
              </p>
            </div>
            <div className="py-14 flex">
              <p className="text-2xl  sm:text-sl font-black md:w-4/5 2xl:w-auto xl:w-auto lg:w-auto">
                Necesidades especiales:
              </p>
              <p className="text-2xl  sm:text-xl ml-2 ">{pet.specialneeds}</p>
            </div>
          </div>
        </main>
      )}
      {handleError === 404 && <Error message="No se encontró mascota" />}
      {handleError === 500 && <Error message="Error en el servidor" />}
    </div>
  );
};

export default PetId;
