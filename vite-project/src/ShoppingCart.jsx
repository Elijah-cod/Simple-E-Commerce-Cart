import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


function ShoppingCart () {
    return(
        <div className='icon'>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>2</span>
        </div>
    )
}

export default ShoppingCart