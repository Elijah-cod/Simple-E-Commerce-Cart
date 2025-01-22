import { useState } from "react"
function ShoppingItems({products, setCount}) {
    function addItems() {
        setCount(count=>count+1)
    }
    return (
        <div className="products" >
        {
            products.map((product)=>
                <div className="item" key={product.id}>
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    <button onClick={addItems}>Add</button>
                </div>
            )
        }
        </div>
    )
}
export default ShoppingItems