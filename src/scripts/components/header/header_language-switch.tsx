import React from "react";

function languges(languges:any){
    let data = languges.languges

    return(
        <div className="header__languges">
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                {data.map((item:string)  =>  <option value={item.value}>{item.text}</option>)}
            </select>
        </div>
    )
}

export default languges