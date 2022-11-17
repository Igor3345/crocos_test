import React from "react";
import Svg_selector from "../svg_selector";

function ticket_quality(){
    return(
        <div className="form_select__wrap-input __select">
            <div className="form_select__quality-input">
                <input type="text" />
                взрл.
            </div>
            <div className="form_select__quality-input">
                <input type="text" />
                дет.
            </div>
            <div className="form_select__quality-input">
                <input type="text" />
                мл
            </div>
            

            <Svg_selector id = {"select_arrow"} />
        </div>
    )
}

export default ticket_quality