import React from "react";
import Svg_selector from "../svg_selector";

function card_links({item} :any){

    return(
        <a href={item.href} className="card_section__item-link">{item.text} <Svg_selector id={"long_arrow_right"} /></a>
    )
}

export default card_links