import React from "react";
import Svg_selector from "../svg_selector";


function header_burger(burger_menu:any){
    const data = burger_menu.burger_menu
    return(
        <div className="header__burger-menu">
            <a href={data.link_href}>
                <Svg_selector id={data.id_icon}/>
            </a>
        </div>
    )
}

export default header_burger