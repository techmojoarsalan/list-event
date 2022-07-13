import React, { useState } from "react";
import produtcs from "./products.json";

export default function Products() {
  const [filteredProducts, setFilteredProducts] = useState([...produtcs]);
  const handleChange = (event) => {
    setFilteredProducts(
      produtcs.filter((product) =>
        product.title.toLowerCase().startsWith(event.target.value.toLowerCase())
      )
    );
  };
  const filterCategory = (event) => {
    setFilteredProducts(
      produtcs.filter((product) =>
        product.category
          .toLowerCase()
          .startsWith(event.target.value.toLowerCase())
      )
    );
  };

  const sortTitle = () => {
    setFilteredProducts(
      [...produtcs].sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      })
    );
  };
  const sortCategory = () => {
    setFilteredProducts(
      [...produtcs].sort((a, b) => {
        if (a.category < b.category) {
          return -1;
        }
        if (a.category > b.category) {
          return 1;
        }
        return 0;
      })
    );
  };

  return (
    <div>
      <input type="text" placeholder="filter title" onKeyDown={handleChange} />
      <input
        type="text"
        placeholder="category filter"
        onKeyDown={filterCategory}
      />
      <button
        onClick={() =>
          filteredProducts.map((i) => console.log(i.title, i.category))
        }
      >
        Submit Button
      </button>
      <table>
        <thead>
          <tr>
            <th>Product Title <button onClick={sortTitle}> Sort title </button>
</th>
            <button onClick={sortCategory}> Sort Category</button>
            <th> Category </th>
            <th> Price </th>
            <th> Rating</th>
          </tr>
        </thead>
        {filteredProducts.map((item) => {
          return (
            <tbody key={item.id}>
              <tr>
                <td> {item.title}</td>
                <td> {item.category}</td>
                <td> {item.price}</td>
                <td>{item.rating.rate} </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      
    </div>
  );
}
