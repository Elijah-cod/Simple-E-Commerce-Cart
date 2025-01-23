import { useState } from "react";

function ShoppingItems({ products, setCount }) {
    const [cart, setCart] = useState([]); // Initialize cart as an array

    function addItems(product) {
        setCount((count) => count + 1);

        setCart((prevCart) => {
            // Check if the product already exists in the cart
            const existingProduct = prevCart.find((item) => item.id === product.id);

            if (existingProduct) {
                // Update the quantity of the existing product
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Add the new product to the cart with a quantity of 1
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    }

    return (
        <div className="products">
            {products.map((product) => (
                <div className="item" key={product.id}>
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    <button onClick={() => addItems(product)}>Buy</button>
                </div>
            ))}
        </div>
    );
}

export default ShoppingItems;
