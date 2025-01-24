function OpenCart ({cart}) {
    console.log(cart)
    return(
        <>
            <h2>Cart</h2>
            <ol>
                {
                    cart.map((item)=>{
                        <li key={item.id}>{item.name}</li>
                    })
                }
            </ol>
        </>
    )
}

export default OpenCart