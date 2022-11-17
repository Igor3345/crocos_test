import React from "react";

function about_us({data}:any){

    return(
        <div className="footer_section">
            <h3 className="footer_section__title">
                {data.title}
            </h3>
            <div className="footer_section__links">
                {data.items.map((item :any)=> <a className="footer_link" href={item.href}>{item.text}</a>)}
            </div>
        </div>
    )
}

export default about_us