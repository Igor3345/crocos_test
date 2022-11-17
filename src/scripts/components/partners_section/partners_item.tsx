import React from "react";

function parners_item( {item} : any ){
    return(
        <a href={item.href} className="partners_item__link">
            <img src={item.image} alt="partner" className="partners_item__image" />
        </a>
    )
}

export default parners_item