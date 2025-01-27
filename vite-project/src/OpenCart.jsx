import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function OpenCart ({cart, total, setCart, setTotal}) {
    function removeItem(id) {
        console.log(id)
        const updatedData = cart
                .map(item => { //We had to first remove the quantity of the item before removing it in the cart
                    if (item.id === id) {
                        setTotal((prevTotal)=>prevTotal-item.price)
                    return { ...item, quantity: item.quantity - 1 }; // Reduce quantity by 1
                    }
                    return item;
                })
                .filter(item => item.quantity > 0); // Remove items with quantity <= 0

                setCart(updatedData)
        console.log(cart);
    }
    return(
        <>
            <h2>Cart</h2>
            <ol>
                {
                    cart.map((item)=>(
                        <li key={item.id}>{item.name}, Price: $ {item.price} Quantity: {item.quantity}<FontAwesomeIcon className="list" onClick={()=>removeItem(item.id)} icon={faX} /></li>
                    ))
                }
            </ol>
            <h2>Total: ${total}</h2>
        </>
    )
}

export default OpenCart