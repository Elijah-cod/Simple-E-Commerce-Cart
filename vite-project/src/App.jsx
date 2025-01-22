import './App.css'
import products from './data/products'
import Header from './Header'
import ShoppingItems from './ShoppingItems'

function App() {

  return (
    <>
      <Header />
      <ShoppingItems products={products} />
    </>
    
  )
}

export default App
