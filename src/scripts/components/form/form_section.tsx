import React1 from "react";
import "./style.scss"
import Cities_select from "./cities_select";
import Date_select from "./date_select"
import Ticket_quality from "./ticket_quality";
import Svg_selector from "../svg_selector";

function form_section({data}:any){

    return(
        <div className="form_section">
            <img src={data.background} alt="background" className="form_section__bg" />
            <div className="container">
                <h3 className="form_section__title">{data.title} {data.city}</h3>
                <span className="form_section__subtitle">{data.subtitle}</span>
                <form action="" className="form_section__form">
                    <div className="form_section__form-inner">
                        <div className="form_section__cities">
                            <Cities_select data={data.cities} />
                        </div>
                        <div className="form_section__date">
                            <Date_select />
                        </div>
                        <div className="form_section__quality">
                            <Ticket_quality />
                        </div>
                    </div>
                    <button className="form_section__submit" type ="submit">Забронировать  <Svg_selector id={"arrow_icon"} /></button>
                </form>
            
            </div>
        </div>
    )
}

export default form_section