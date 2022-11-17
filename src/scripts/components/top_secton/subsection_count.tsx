import React from "react";

function subsection_count({data} :any){
    console.log(data)

    return(
        <>
        <div className="subsection__count">
            <img src={data.quantity} alt="" />
            <span className="subsection__counts-description">{data.text}</span>
        </div>
        </>
    )
}

export default subsection_count