import React from "react";
import "./style.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from "swiper"
import Paragraph from "./paragraph";
import Description_social_links from "./description_social_links";


function description_slider_section({data} :any){
    console.log(data)
    return(
        <div className="description_slider_section">
            <h3 className="description_slider_section__title">{data.title}</h3>
            <Swiper 
            modules={[Navigation]}
            navigation= {true}
            >
                {data.items.map((item :any , index :number) => <SwiperSlide>
                    <div className="description_slider_section__slide">
                        <div className="description_slider_section__img-box">
                            <img src={item.image} alt="slide" className="description_slider_section__image" />
                        </div>
                        <div className="description_slider_section__content">
                            <a href={item.link.href} className="description_slider_section__link">{item.link.text}</a>
                            <div className="description_slider_section__paragraphs">
                                {item.description.map((item :string , index :number) => <Paragraph text={item}  key={index} />)}
                            </div>
                            <span className="description_slider_section__publish-date">{item.publish_date}</span>
                            <span className="description_slider_section__soc-share">Поделиться</span>
                            <div className="description_slider_section__soc-links">
                                {item.social_links.map((item :any , index :number)=> <Description_social_links links={item}  key = {index}/>)}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </div>
    )
}

export default description_slider_section