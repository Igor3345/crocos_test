import React from "react";

function description_social_links ({links} :any){
    return(
        <a href={links.soc_href} className="description_social_link">
            <img src={links.icon} alt="soc-link" />
        </a>
    )
}

export default description_social_links