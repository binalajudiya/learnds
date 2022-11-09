import React from 'react';
import { useEffect, useState } from "react";


const Timer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "December, 31, 2022";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="countdown">
            <div className="col-4">
            <div className="box">
                <p id="day">{days}</p>
                <span className="text">Days</span>
            </div>
            </div>
            <div className="col-4">
            <div className="box">
                <p id="hour">{hours}</p>
                <span className="text">Hours</span>
            </div>
            </div>
            <div className="col-4">
            <div className="box">
                <p id="minute">{minutes}</p>
                <span className="text">Minutes</span>
            </div>
            </div>
            <div className="col-4">
            <div className="box">
                <p id="second">{seconds}</p>
                <span className="text">Seconds</span>
            </div>
            </div>
        </div>
    )
}
 export default Timer;