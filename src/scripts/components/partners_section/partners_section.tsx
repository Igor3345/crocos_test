import React from "react";
import "./style.scss"
import Parners_item from "./partners_item";


function partners_section({data} :any){
    return(
        <div className="container">
            <div className="partners_section">
                {data.map((item:any , index:number) => <Parners_item item={item} key ={index}/>)}
            </div>
        </div>
    )
}

export default partners_section