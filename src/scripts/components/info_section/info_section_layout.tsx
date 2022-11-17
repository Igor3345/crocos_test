import React from "react";
import "./style.scss"
import Svg_selector from "../svg_selector";
import Grid_item from "./grid_item";
import Card_item from "./card_item";


function info_section_layout({data} :any){
    return(
        <div className="container">
            <div className="info_section">
                <div className="info_section__title-box">
                    <div className="info_section__title-layout">
                        <h2 className="info_section__title">{data.layout.title}</h2>
                        <span className="info_section__subtitle">{data.layout.subtitle}</span>
                    </div>
                    <a href={data.layout.link.link_href} className="info_section__link">
                        {data.layout.link.text}
                        <Svg_selector id= "long_arrow_right" />
                    </a>
                </div>
                <div className="info_section__grid">
                    {data.layout.items.map((item :any , index :number) => <Grid_item data={item} key ={index} />)}
                </div>
                <div className="info_section__cards">
                    <h3 className="info_section__cards-title">{data.card.title}</h3>
                    <div className="info_section__cards-layout">
                        {data.card.items.map((item:any , index:number)=><Card_item data ={item} index={index} />)}
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default info_section_layout