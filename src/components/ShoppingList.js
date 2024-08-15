import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter"; // Import the Filter component

function ShoppingList({ items }) {
  const [category, setCategory] = useState("All");

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const filteredItems = items.filter((item) => {
    if (category === "All") return true;
    return item.category === category;
  });

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
