import React from "react";
import './style.scss'
import Top_section_logotype from "./top_section_logo";
import Top_sections_thumbs from "./top_sections_thumbs";
import Top_subsection from "./top_subsection";

function top_section({data} :any){
    return(
        <>
        <div className="top_section">
            <img src={data.background} alt="background" className="top_sectopn__background" />
            <div className="container">
                <div className="top_section__content">
                    <Top_section_logotype  imgSrc = {data.logotype}/>
                    <div className="top_section__thumbs">
                        {data.items.map((item :any, index:number) => <Top_sections_thumbs item={item} key={index} />)}
                    </div>
                </div>
            </div>
        </div>
        <div className="top_subsection">
        <Top_subsection data={data.top_subsection} />
        </div>
        </>
        
    )
}

export default top_section