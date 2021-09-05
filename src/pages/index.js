import * as React from "react";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Card from "../components/card/Card";


// markup
const IndexPage = () => {
  return (
    <>
      <div className="container">
        <title>Hello Pet</title>
        <Header />
        <main class="bg-gray-100 mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 p-2">
          <Card 
            name="Nala Maria"
            picture="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
          />

          <Card 
            name="Don Pancho"
            picture="https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1283&q=80"
          />

          <Card 
            name="Lucas Ignacio"
            picture="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
          />

          <Card 
            name="Pablo Emilio"
            picture="https://images.unsplash.com/photo-1501820488136-72669149e0d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
          />
        </main>
      </div>   
      <Footer /> 
    </>
  );
};

export default IndexPage;
