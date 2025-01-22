import './App.css'
import products from './data/products'
import Header from './Header'
import ShoppingItems from './ShoppingItems'
import ShoppingCart from './ShoppingCart'

function App() {

  return (
    <>
      <Header />
      <ShoppingItems products={products} />
      <ShoppingCart />
    </>
    
  )
}

export default App
