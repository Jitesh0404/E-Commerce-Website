import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommanded/Recommended";
import Sidebar from "./Sidebar/Sidebar";
//Database
import products from "./data/data";
import Card from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  //------------------Input filter----------------------------
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  // ------------------Radio filter----------------------------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  // ------------------Buttons filter----------------------------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------------Main filter method----------------------------
  function filteredData(products, selected, query) {
    let filteredProducts = products;
    //filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }
    //selected Filter
    if (selected) {
      filteredProducts = filteredItems.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }
  const result = filteredData(products, selectedCategory, query);
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
