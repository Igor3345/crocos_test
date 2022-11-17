import React from "react";


function logo({logo} :any){
    return(
        <>
        <a href={logo.link_href} className="header__logo">
            <img src={logo.img} alt="Logo" />
        </a>
        </>
    )
}

export default logo