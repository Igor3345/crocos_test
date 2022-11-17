import React from "react";
import './style.scss'
import Logo from "./logo"
import Header_tabs from "./header_tabs"
import Social_links from "./social_links"
import Header_search from "./header_search";
import Languges from "./header_language-switch";
import HBasket from "./header__basket";
import Header_burger from "./header_burger";

function header({data} :any){

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Logo logo = {data.logo}/>
                    <Header_tabs tabs = {data.tabs}/>
                    <Social_links soc ={data.social_links}/>
                    <Header_search search ={data.search} />
                    <Header_burger burger_menu = {data.burger_menu} />
                    <Languges languges = {data.languges}/>
                    <HBasket icon ={data.basket} />
                </div>
            </div>
        </header>
    )
}


export default header