import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/styles/styles.scss';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartContextProvider from './store/CartContextProvider';

function App() {

    const[cartIsVisible, setCartIsVisible] = useState(false);
    const showCartHandler = () => {
        setCartIsVisible(true);
    }
    const hideCartHandler = () => {
        setCartIsVisible(false);
    }

return (
    <CartContextProvider>
        {cartIsVisible && <Cart onHideCart={hideCartHandler}/>}
        <Header onShowCart={showCartHandler}/> 
        <main>
            <Meals/>
        </main>
    </CartContextProvider>

);
}

export default App;
