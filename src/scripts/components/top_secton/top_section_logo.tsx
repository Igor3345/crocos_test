import React from "react";

function top_section_logotype({imgSrc} :any){

    return(
        <div className="top_section__logo-wrap">
            <img src={imgSrc} alt="logo" className="top_section__logo" />
        </div>
    )
}

export default top_section_logotype