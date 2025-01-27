import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import OpenCart from './OpenCart';
import { useState } from 'react';


function ShoppingCart ({count, cart, total, setCart}) {
    const [isCartOpen, setIsCartOpen] = useState(false); // State to control visibility of OpenCart
    function toggleCartVisibility() {
        setIsCartOpen((prev) => !prev); // Toggle the visibility state
    }
    return(
        <div className='icon'>
            <FontAwesomeIcon onClick={toggleCartVisibility} icon={faCartShopping}/>
            <span>{count}</span>
            {isCartOpen && <OpenCart cart={cart} total={total} setCart={setCart}/>}
        </div>
    )
}

export default ShoppingCart