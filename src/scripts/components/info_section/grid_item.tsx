import React from "react";

function grid_item({data} :any){
    return(
        <div className="info_section__grid-item">
            <img src={data.image} alt="image" className="info_section__grid-image" />
            <div className="info_section__grid-text">
                <h5 className="info_section__grid-title">{data.title}</h5>
                <span className="info_section__grid-description">{data.description}</span>
            </div>
        </div>
    )
}

export default grid_item