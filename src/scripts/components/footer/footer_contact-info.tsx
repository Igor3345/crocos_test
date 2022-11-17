import React from "react";
import Phone_subsection from "./phone_subsection";
import Soc_subsection from "./soc_subsection";

function footer_contact_info({data} :any){

    return(
        <div className="footer_section">
            <div className="footer_subsection">
                {data.phones.map((item :any, index :number)=> <Phone_subsection data={item} key={index} />)}
            </div>
            <div className="footer_subsection">
                <Soc_subsection data={data.soc_info} />
            </div>
        </div>
    )
}

export default footer_contact_info