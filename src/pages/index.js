import * as React from "react";
import { useEffect, useState } from "react";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Card from "../components/card/Card";

const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=BGaIk38B9w37zbPgmuf399g4kAKxS3wwIm4J5f2P1bRXlaV5l9tb6JVx6lk35D5Je9k-TXDJup-hksU-y1-e7RMjwgJ_NiS7m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAHW9epDnRqvuz1KboN1QlsMQGc9A-Z0kM-ZBGt2kTa5v2RltZoAAJbEYgY9KZgSISxQwuiC3AarT6ZYo_va6BtqKkbQvGZTq9z9Jw9Md8uu&lib=MDS5x9PieDIg7VDrqWsBVAXY7dDVGhk4I';


// markup
const IndexPage = () => {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch(url)
    .then(res => res.json()) 
    .then(data => {
      setData(data);
    });
  }, [])

  const getCards = () => {
    if (data && data.length > 0) {
      return data.map(element => {
        return <Card 
            name={`${element.name} ${element.lastName}`}
            picture={element.picture}
          />
      })
    }

    <div>
      There is not content here
    </div>
  }
  

  return (
    <>
      <div className="container">
        <title>Hello Pet</title>
        <Header />
        <main className="bg-gray-100 mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 p-2">
          { getCards() }
        </main>
      </div>   
      <Footer /> 
    </>
  );
};

export default IndexPage;
