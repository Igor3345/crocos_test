import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function react_calendar(){
    const [startDate, setStartDate] = useState(new Date());
    return(
    <>
        <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
    </>)
}

export default react_calendar
