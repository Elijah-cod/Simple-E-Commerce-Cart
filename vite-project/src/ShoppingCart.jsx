import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


function ShoppingCart ({count}) {
    return(
        <div className='icon'>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>{count}</span>
        </div>
    )
}

export default ShoppingCart