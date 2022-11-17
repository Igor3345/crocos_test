import React from "react";
import Svg_selector from "../svg_selector";
import React_calendar from "./react_calendar";

function date_select(){
    return(
        <div className="form_select__wrap-input">
            <div className="form_select__svg-wraper">
                <Svg_selector id = {"calendar"} />
            </div>
                <React_calendar />
        </div>
    )
}

export default date_select