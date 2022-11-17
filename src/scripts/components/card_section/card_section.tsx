import React from "react";
import Card_section_item from "./card_section_item";
import "./style.scss"

function card_section({data} :any){
    return(
        <div className="container">
            <div className="card_section">
                <h3 className="card_section__title">{data.title}</h3>
                <span className="card_section_subtitle">{data.subtitle}</span>
                <div className="card_section__grid-layout">
                    {data.items.map((item:any , index:number)=> <Card_section_item item = {item} key={index} />)}
                </div>
            </div>
        </div>
        
    )
}

export default card_section