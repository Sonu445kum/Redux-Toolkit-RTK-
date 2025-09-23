
import AuthDemo from './Authentications/AuthDemo';
import AllProductsList from './CartSystem/AllProductList'
import Cart from './CartSystem/Cart'
import About from './Components/About';
import CounterApp from './Components/CounterApp'
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import TodoApp from './TodoApp/TodoApp';
import UseReducerCounter from './UseReducers/UseReducerCounter'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
      {/* <h1>React Redux Toolkit or RTK</h1>
      {/* <CounterApp/>
      {/* UseReducers Hooks */}
      {/* <UseReducerCounter/>  */}

      {/* Cart System App */}
      
      {/* <Cart/>
      <AllProductsList/> */}

      {/* <Router>
      <Navbar />
      <h1>My Shop</h1> 
      <div className="p-4">
        <Routes>
          <Route path="/" element={<AllProductsList/>} />
          <Route path="/products" element={<AllProductsList />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>  */}
       

       {/* TodoApp */}
       {/* <TodoApp/> */}

       {/* Authentications */}
       <AuthDemo/>
    </>
  )
}

export default App
