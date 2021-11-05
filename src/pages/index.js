import * as React from "react";
import { useEffect, useState } from "react";

import Card from "../components/card/Card";
import LetSuspense from "../components/suspense/LetSuspense";

const url = "../../model/foundation.json";

const Header = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../components/header/Header")), 3000);
  });
});

const Footer = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../components/footer/Footer")), 3000);
  });
});

// markup
const IndexPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then(function (data) {
        console.log(data);
        const { foundationName } = data;
        setData(foundationName);
      });
  }, []);

  const getCards = () => {
    if (data && data.length > 0) {
      return data[0].pets.map((element) => {
        console.log(element, "hola element");
        return (
          <Card
            key={element.id}
            name={element.name}
            picture={element.mainPhoto}
            gender={element.gender}
            age={element.age}
            noVirals={element.noVirals}
            dewormed={element.dewormed}
          />
        );
      });
    }

    <div>There is not content here</div>;
  };

  return (
    <>
      <React.Suspense fallback={<LetSuspense />}>
        <div className="container">
          <title>Hello Pet</title>
          <Header />
          <main className="bg-gray-100 mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 p-2 md:grid-cols-2 md:grid sm:grid sm:grid-cols-1">
            {getCards()}
          </main>
        </div>
        <Footer />
      </React.Suspense>
    </>
  );
};

export default IndexPage;
