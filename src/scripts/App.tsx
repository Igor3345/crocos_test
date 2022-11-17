import { useState } from 'react'
import Header from './components/header/header'
import {data} from "./data/data"
import Top_section from './components/top_secton/top_section'
import Form_section from './components/form/form_section'
import Info_section_layout from './components/info_section/info_section_layout'
import Thumb_slider from './components/thumb_slider_section/thumb_slider_section'
import Card_section from './components/card_section/card_section'
import Description_slider_section from './components/description_slider_section/description_slider_section'
import Partners_section from './components/partners_section/partners_section'
import Service_section from './components/service_section/service_section'
import Footer from './components/footer/footer'

function App() {


  return (
    <div className="App">
      <Header data = {data.header}/>
      <Top_section data= {data.top_section}/>
      <Form_section data = {data.form_section} />
      <Info_section_layout data = {data.info_section} />
      <Thumb_slider data = {data.thumb_slider} />
      <Card_section data = {data.card_section} />
      <Description_slider_section data = {data.description_slider_section}/>
      <Partners_section data = {data.partners_section} />
      <Service_section data = {data.service_section} />
      <Footer data = {data.footer} />
    </div>
  )
}

export default App
