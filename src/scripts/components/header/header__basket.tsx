import React from "react";
import Svg_selector from "../svg_selector";

function hBasket({icon} :any){

    return(
        <a href="#" className="header__basket">
            <div className="header__basket-icon">
                <Svg_selector  id={icon} />
            </div>
            <div className="header__basket-quality">
                <span className="header__basket-title">Корзина</span>
                <span className="header__basket-cost">0 тг.</span>
            </div>
        </a>
    )
}

export default hBasket