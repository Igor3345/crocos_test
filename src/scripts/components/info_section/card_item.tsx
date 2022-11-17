import React from "react";
import Svg_selector from "../svg_selector";

function card_item({data} :any){
    return(
        <div className="info_section__card-item">
            <div className="info_section__card-inner">
                <img src={data.image} alt="card" className="info_section__card-img" />
                <div className="info_section__card-content">
                        <h5 className="info_section__card-title">{data.title}</h5>
                        <p className="info_section__card-description">{data.description}</p>
                </div>
            </div>
            <a href={data.link.link_href} className="info_section__card-link">{data.link.text} 
                    <Svg_selector id={"select_arrow"} />
            </a>
        </div>
    )
}

export default card_item