function OpenCart ({cart}) {
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
        </>
    )
}

export default OpenCart