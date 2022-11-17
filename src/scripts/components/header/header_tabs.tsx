import React from "react";
import { useState } from "react";

function header_tabs({tabs}) {

    return(
        <div className="header__tabs">
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                {tabs.map((item :string , index :number ) => <> <a href={item.href} className="btn">{item.text}</a></>)}
            </div>
        </div>
    )
}

export default header_tabs