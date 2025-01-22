
function ShoppingItems({products}) {
    console.log(products)
    return (
        <div className="products" >
        {
            products.map((product)=>
                <div className="item" key={product.id}>
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    <button>Add</button>
                </div>
            )
        }
        </div>
    )
}

export default ShoppingItems