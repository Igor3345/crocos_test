import React from "react";
import "./style.scss"
import Service_item from "./service_item";
import Svg_selector from "../svg_selector";

function service_section({data} :any){
    return(
        <div className="service_section">
            <img src={data.background} alt="" className="service_section__background" />
            <div className="container">
                <div className="service_section__inner row">
                    <div className="service_section__text-content col-lg-6 col-12">
                        <h3 className="service_section__title">{data.title}</h3>
                        <span className="service_section__subtitle">{data.subtitle}</span>
                        <div className="service_section__service-items">
                            {data.service_items.map((item :any , index :number)=><Service_item item = {item} key={index} />)}
                        </div>
                        <a href={data.link.href} className="service_section__link">{data.link.text} <Svg_selector id={"select_arrow"} /></a>
                    </div>
                    <div className="service_section__image-box col-lg-6 col-12">
                        <img src={data.image} alt="image" className="service_section__image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default service_section