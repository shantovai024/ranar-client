import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import AllProducts from './Components/AllProducts/AllProducts';
import Inventory from './Components/Inventory/Inventory';
import AddProducts from './Components/AddProducts/AddProducts';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import ResetPassword from './Components/ResetPassword/ResetPassword';

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/resetpassword' element={<ResetPassword></ResetPassword>}></Route>
          <Route path='/addproducts' element={<RequireAuth>
            <AddProducts></AddProducts>
          </RequireAuth>}></Route>
          <Route path='/allproducts' element={<RequireAuth>
            <AllProducts></AllProducts>
          </RequireAuth>}></Route>
          <Route path='inventory/:id' element={<RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
