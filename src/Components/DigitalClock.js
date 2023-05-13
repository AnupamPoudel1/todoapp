import React, { useState } from 'react';

const DigitalaClock = () => {

    let arrDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let arrMth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const [year, setYear] = useState();
    const [month, setMonth] = useState();
    const [date, setDate] = useState();
    const [day, setDay] = useState();

    const updateDate = () => {
        let time = new Date();
        let y = time.getFullYear();
        let m = time.getMonth();
        let d = time.getDate();
        let da = time.getDay();

        setYear(y);
        setMonth(arrMth[m]);
        setDate(d);
        setDay(arrDay[da]);
    }

    setInterval(updateDate, 1);


    return (
        <div className="text-black flex text-lg font-bold mb-5">
            <span id="year" className='ml-1'>{year}</span>
            <span id="month" className='ml-1'>{month}</span>
            <span id="date" className='ml-1'>{date}</span>
            <span id="day" className='ml-1'>{day}</span>
        </div>
    )
}

export default DigitalaClock
