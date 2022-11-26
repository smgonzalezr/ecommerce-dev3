import './App.css';
import React from 'react';
import Footer from './common/footer/Footer.jsx'
import Header from './common/header/Header';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Pages from './pages/Pages';
import Data from './components/flashDeals/Data';
import { useState } from 'react';
import Cart from './common/cart/Cart';
import Main from './components/Home/Main';


function App() {
  //paso1: obtener datos de la base de datos
  const { productItems} = Data;

  const [cartItem, setCardItem] = useState([])

  const addToCart = (product) =>{
    const productExit = cartItem.find((item) => item.id === product.id)

    if(productExit){
      setCardItem(cartItem.map((item) => 
      (item.id === product.id? {...productExit, qty: productExit.qty + 1} : item)))
    }else {
      setCardItem([...cartItem, { ...product, qty: 1}])
    }
  }
  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if(productExit.qty === 1) {
      setCardItem(cartItem.filter((item) => item.id !== product.id))
  }else{
    setCardItem(cartItem.map((item) => (item.id === product.id ? {...productExit, qty: productExit.qty-1}:item)))
  }
}
  return (
    <>
      <BrowserRouter>
        <Header cartItem={cartItem}/>
          <Routes>
            <Route path='/' element={<Pages productItems={productItems} addToCart={addToCart} />} />
            <Route path='/Cart' element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty ={decreaseQty}/>} />
            <Route path='/Admin' element={<Main/>} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App