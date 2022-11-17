import React from "react";
import Svg_selector from "../svg_selector"

function header_search(search:any){
    const data = search.search

    return(
        <div className="header__search">
            <a href={data.link_href}>
                <Svg_selector id ={data.icon_id} />
            </a>

        </div>
    )
}

export default header_search