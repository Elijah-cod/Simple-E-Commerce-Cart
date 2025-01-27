import './App.css'
import products from './data/products'
import Header from './Header'
import ShoppingItems from './ShoppingItems'
import ShoppingCart from './ShoppingCart'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)

  return (
    <>
      <Header />
      <ShoppingItems products={products} setCount={setCount} setCart={setCart} setTotal={setTotal}/>
      <ShoppingCart count={count} cart={cart} total={total} setCart={setCart} setTotal={setTotal}/>
    </>
    
  )
}

export default App
