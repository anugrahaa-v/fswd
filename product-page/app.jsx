import { useState } from "react";

function App() {
  const [category, setCategory] = useState("All");

  const products = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "Mobile", category: "Electronics" },
    { id: 3, name: "T-Shirt", category: "Clothing" },
    { id: 4, name: "Jeans", category: "Clothing" },
    { id: 5, name: "Notebook", category: "Books" }
  ];

  const filteredProducts =
    category === "All"
      ? products
      : products.filter(p => p.category === category);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Browser</h2>

      <button onClick={() => setCategory("All")}>All</button>{" "}
      <button onClick={() => setCategory("Electronics")}>Electronics</button>{" "}
      <button onClick={() => setCategory("Clothing")}>Clothing</button>{" "}
      <button onClick={() => setCategory("Books")}>Books</button>

      <hr />

      <h3>Products</h3>
      {filteredProducts.map((item) => (
        <p key={item.id}>
          {item.name} - {item.category}
        </p>
      ))}
    </div>
  );
}

export default App;
