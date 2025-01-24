import './App.css'
import products from './data/products'
import Header from './Header'
import ShoppingItems from './ShoppingItems'
import ShoppingCart from './ShoppingCart'
import { useState } from 'react'
import OpenCart from './OpenCart'

function App() {
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState([]);
  return (
    <>
      <Header />
      <ShoppingItems products={products} setCount={setCount} setCart={setCart}/>
      <ShoppingCart count={count} cart={cart}/>
    </>
    
  )
}

export default App
