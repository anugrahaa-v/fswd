import { useState } from "react";

function App() {
  const products = [
    { id: 1, name: "Laptop", price: 45000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 1500 }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simple E-Commerce Store</h2>

      <h3>Products</h3>
      {products.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <b>{item.name}</b> - ₹{item.price}
          <br />
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}

      <hr />

      <h3>Cart Items</h3>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <p key={index}>
            {item.name} - ₹{item.price}
          </p>
        ))
      )}
    </div>
  );
}

export default App;
