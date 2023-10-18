import {Routes,Route} from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Invoice from './pages/Invoice'
export const AppRoutes =()=>{
    return(
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/invoice' element={<Invoice/>}/>
            <Route path='*' element={<Login/>}/>
        </Routes>
    )
}