import React from "react";
import Svg_selector from "../svg_selector";


function soc_subsection({data} :any){
    return(
        <>
        <h6 className="footer_subsection__title">{data.title}</h6>
        <div className="footer_subsection_box">
            {data.social.map((item:any)=> <a href={item.href} className="footer_social-links"><Svg_selector id={item.id_icon} /></a>)}
        </div>
        </>
    )
}

export default soc_subsection