import * as React from "react";
import { useEffect, useState } from "react";
import { Suspense, lazy } from "@uploadcare/client-suspense";

import Card from "../components/card/Card";
import LetSuspense from "../components/suspense/LetSuspense";
import Error from "../components/errors/Error";

const url = "../../model/foundation.json";

const Header = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../components/header/Header")), 3000);
  });
});

const Footer = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../components/footer/Footer")), 3000);
  });
});

// markup
const IndexPage = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(200);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 404) {
          setStatus(404);
        } else {
          setStatus(500);
        }
      })
      .then((data) => {
        const { foundationName } = data;
        setData(foundationName);
        if (!foundationName[0].pets || foundationName[0].pets.length === 0) {
          setStatus(404);
        }
      })
      .catch((error) => {
        console.log(error);
        setStatus(500);
      });
  }, []);

  const getCards = () => {
    if (data && data.length > 0) {
      return data[0].pets.map((element) => {
        return <Card key={element.id} {...element} />;
      });
    }
    <div>There is not content here</div>;
  };

  return (
    <>
      <Suspense fallback={<LetSuspense />}>
        <div className="container">
          <title>Hello Pet</title>
          <Header />
          <main className="bg-gray-100 mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-2 p-2  xl:grid xl:grid-cols-3 xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xl:grid 2xl:grid-cols-3 md:grid md:grid-cols-2   min-h-screen">
            {getCards()}
            {status === 404 && <Error message="No se encontraron mascotas" />}
            {status === 500 && <Error message="Error en el servidor" />}
          </main>
        </div>
        <Footer />
      </Suspense>
    </>
  );
};

export default IndexPage;
