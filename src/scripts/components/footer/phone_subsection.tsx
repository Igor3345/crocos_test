import React from "react";


function phone_subsection({data} :any){
    return(
        <>
        <h6 className="footer_subsection__title">{data.title}</h6>
        <a href={data.tel} className="footer_phone_link">{data.num}</a>
        </>
    )
}

export default phone_subsection