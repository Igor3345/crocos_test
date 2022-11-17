import React from "react";
import React_selector from "../react_selector";
import Svg_selector from "../svg_selector";
function cities_select({data} :any){

    return(
    <>
        <div className="form_select__wrap-input">
            <div className="form_select__svg-wraper">
                <Svg_selector id = {"map_icon"} />
            </div>
            <React_selector options = {data.from} />
        </div>
        <div className="form_select__separate">
            <Svg_selector id = {"arrow_right"} />
        </div>
        <div className="form_select__wrap-input">
            <div className="form_select__svg-wraper">
                <Svg_selector id = {"map_icon"} />
            </div>
                <React_selector options = {data.to} />
            </div>
    </>)
}


export default cities_select