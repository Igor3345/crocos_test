import React from "react";
import Subsection_count from "./subsection_count";

function top_subsection({data} :any){

    return(
        <>
        <img src={data.background} alt="background" className="top_subsection__bg" />
        <img src={data.background2} alt="" className="top_subsection__bg2" />
        <div className="top_subsection__content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 offset-lg-5">
                        <h2 className="top_subsection__title">{data.title}</h2>
                        <p className="top_subsection__text">
                            <span className="top_subsection__text-first">{data.city} </span>
                            {data.description}</p>
                        <div className="subsection__counts">
                            {data.counter_items.map((item :any , index :number)=><Subsection_count data={item} key={index} />)} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default top_subsection