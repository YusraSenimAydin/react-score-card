import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Card from "./components/Card";
import DATA from "./data/data.js";

export default function App() {
  const CardComponent = DATA.map((item, index) => (
    <Card body={item.body} score={item.score} id={index} />
  ));
  return (
    <div className="Card py-5 ">
      <div className="container">
        <div className="row row-cols-2 row-cols-sm-4 row-cols-md-3 g-3">
          {CardComponent}
        </div>
      </div>
    </div>
  );
}
