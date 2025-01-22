import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import ShoppingItems from './ShoppingItems';


function ShoppingCart ({count}) {
    return(
        <div className='icon'>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>{count}</span>
        </div>
    )
}

export default ShoppingCart