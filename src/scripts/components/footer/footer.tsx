import React from "react";
import "./style.scss"
import About_us from "./about_us";
import Footer_pictures from "./footer_pictures";
import Footer_contact_info from "./footer_contact-info";

function footer({data} :any){
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    {data.about_us.map((item :any, index :number)=> <About_us data={item} key = {index} />)}
                    <div className="footer_section __pictures">{data.footer_pickture.map((item :any , index :number)=> <Footer_pictures data={item} key = {index} />)}</div>
                    <Footer_contact_info data = {data.contact_info} />
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__bottom__inner">
                        <span className="bottom1">Все права защищены © 2021</span>
                            <div className="develop">
                                <span className="bottom1">РАЗРАБОТАНО:</span>
                                <img src={data.develop} alt="develop" />
                            </div>
                        </div>
                    </div>
                </div>
        </footer>

    )    
}

export default footer