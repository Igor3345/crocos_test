import React from "react";
import Svg_selector from "../svg_selector";

function social_links({soc} :any) {

    return(
        <div className="header__links">
            {soc.map(item => <a href={item.link_href}><Svg_selector id={item.id_icon} /></a>)}
        </div>
    )
}

export default social_links