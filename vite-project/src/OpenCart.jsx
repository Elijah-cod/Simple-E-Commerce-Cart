function OpenCart ({cart, total}) {
    console.log(cart)
    return(
        <>
            <h2>Cart</h2>
            <ol>
                {
                    cart.map((item)=>(
                        <li key={item.id}>Item: {item.name} Price: $ {item.price} Quantity: {item.quantity}</li>
                    ))
                }
            </ol>
            <h2>Total: ${total}</h2>
        </>
    )
}

export default OpenCart