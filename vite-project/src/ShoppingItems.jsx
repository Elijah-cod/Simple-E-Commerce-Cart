function ShoppingItems({ products, setCount, setCart }) {

    function addItems(product) {
        setCount((count) => count + 1);

        setCart((cart) => {
            // Check if the product already exists in the cart
            const existingProduct = cart.find((item) => item.id === product.id);

            if (existingProduct) {
                // Update the quantity of the existing product
                return cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Add the new product to the cart with a quantity of 1
                return [...cart, { ...product, quantity: 1 }];
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
