import './App.css'
import products from './data/products'
import Header from './Header'
import ShoppingItems from './ShoppingItems'
import ShoppingCart from './ShoppingCart'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header />
      <ShoppingItems products={products} setCount={setCount}/>
      <ShoppingCart count={count}/>
    </>
    
  )
}

export default App
