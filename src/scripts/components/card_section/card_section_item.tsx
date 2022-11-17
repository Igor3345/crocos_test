import React from "react";
import Card_links from "./card_links";

function card_section_item({item} :any){
    return(
        <div className="card_section__item">
            <img src={item.image} alt="bg" className="card_section__item-background"/>
            <div className="card_section__wrap-title">
                <h5 className="card_section__item-title">{item.title}</h5>
            </div>
            <div className="card_section__item-links">
                {item.links.map((item:any , index:number)=> <Card_links item={item} key={index} />)}
            </div>
        </div>
    )

}

export default card_section_item