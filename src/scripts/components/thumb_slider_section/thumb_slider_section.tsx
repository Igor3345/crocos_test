import React from "react";
import "./style.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import { useState } from 'react';
import { Controller } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Svg_selector from "../svg_selector";

function thumb_slider({data} :any){

    let swipe1 :any;
    let swipe2 :any;

    function checkFirstSwiper(item:any){
        swipe1 = item
    }

    function checkSecondSwiper(item:any){
        swipe2 = item;
        buildСonnection()
    }

    function buildСonnection(){
        swipe2.controller.control = swipe1;
        let thumbs = document.querySelectorAll('.js-thumbs');
        thumbs[0].classList.add('__active')
    }
    

    function slideMove(index :number){
        let thumbs = document.querySelectorAll(".js-thumbs")
        swipe2.slideTo(index);
        for(let i = 0; i < thumbs.length; i++){
            thumbs[i].classList.remove('__active');
        }
        thumbs[index].classList.add('__active')
    }

    return(
        <div className="thumbs_swiper_wrapper">
            <Swiper
                modules={[Controller , EffectFade]}
                onSwiper = {checkFirstSwiper}
                effect="fade"
            >
                {data.map((item :any , index :number) => <SwiperSlide key = {index}>
                        <img src={item.img} alt="slide" className="thumbs_slider_image" />
                    </SwiperSlide>)}    
            </Swiper>

            <div className="thumbs_swiper_wrapper__second">
                <Swiper
                    modules={[Controller]}
                    onSwiper = {checkSecondSwiper}
                    navigation = {true}
                >
                    {data.map((item :any , index :number) => <SwiperSlide key = {index}>
                        <div className="thumbs_swiper_wrapper__second-wrap">
                            <div className="thumbs_swiper_wrapper__second-content">
                                <h4 className="thumbs_swiper_slider__second-subtitle">{item.subtitle}</h4>
                                <h3 className = "thumbs_swiper_slider__second-title">{item.title}</h3>
                                <p className="thumbs_swiper_slider__second-description">{item.description}</p>
                                <a href={item.link.href} className="thumbs_swiper_slider__second-link">{item.link.text} <Svg_selector id={"select_arrow"} /></a>
                            </div>
                        </div>
                        </SwiperSlide>)}
                </Swiper>
            </div>

            <div className="thumb_swiper__thumbs">
                {data.map((item: any , index:number)=>
                    <div className="thumb_swiper__thumb-wrap js-thumbs" onClick= {()=> slideMove(index)}>
                        <div className="thumb_swiper__thumb">
                            <Svg_selector id={item.icon} key = {index} />
                        </div>
                        <div className="thumb_swiper__thumbs-title">
                            <span className="thumb_swiper__thumbs-text">{item.title}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default thumb_slider