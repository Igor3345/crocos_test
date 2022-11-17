import React from "react";
import Svg_selector from "../svg_selector";

function service_item({item} :any){
    return(
        <div className="service_section__service-item">
            <Svg_selector id = {item.icon_id} />
            <span className="service_section__service-description">{item.text}</span>
        </div>
    )
}

export default service_item