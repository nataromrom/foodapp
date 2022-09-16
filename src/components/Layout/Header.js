import React from "react";
import headerImage from "../../assets/pizza.jpg";
import HeaderCartButton from   "../../components/Layout/HeaderCartButton"

const Header = (props) => {
    return <React.Fragment> 
        <header className="header">
            <h1>Итальяно Пицца</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className="main-image">
            <img src={headerImage} alt="Блюда итальянской кухни" />
        </div>
    </React.Fragment>
}
export default Header;