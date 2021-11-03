import * as React from "react";
import { useEffect, useState } from "react";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Card from "../components/card/Card";

const url = "../../model/foundation.json";

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
            name={`${element.name} ${element.lastName}`}
            picture={element.mainPhoto}
          />
        );
      });
    }

    <div>There is not content here</div>;
  };

  return (
    <>
      <div className="container">
        <title>Hello Pet</title>
        <Header />
        <main className="bg-gray-100 mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 p-2">
          {getCards()}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default IndexPage;
