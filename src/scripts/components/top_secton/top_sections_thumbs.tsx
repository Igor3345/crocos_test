import React from "react";

function top_sections_thumbs({item} :any){
    return(
        <a href={item.link_href} className="top_section__thumb">
            <div className="top_section__thumb-wrap">
                <img src={item.image} alt="thumb" className="top_section__thumb-image" />
            </div>
            <span className="top_section__thumb-title">{item.title}</span>
            <span className="top_section__thumb-subtitle">{item.subtitle}</span>
        </a>
    )
}

export default top_sections_thumbs;