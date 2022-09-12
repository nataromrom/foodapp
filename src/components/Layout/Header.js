import React from "react";
import headerImage from "../../assets/sushi.jpg";
import HeaderCartButton from   "../../components/Layout/HeaderCartButton"

const Header = (props) => {
    return <React.Fragment> 
        <header className="header">
            <h1>Япона Кухня</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className="main-image">
            <img src={headerImage} alt="Блюда японской кухни" />
        </div>
    </React.Fragment>
}
export default Header;