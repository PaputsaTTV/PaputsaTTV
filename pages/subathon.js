import { useEffect, useState } from "react";

export default function App() {
    var [x, setX] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            var time = document.getElementById("time");
            var epch = new Date("April 22 2022 12:00:00");
            var diff = (epch - Date.now())/1000;
            var days = `${diff/(60*60*24)}`.split(".");
            diff = diff%(60*60*24);
            days = days[0];
            var hours = `${diff/(60*60)}`.split(".");
            diff = diff%(60*60);
            hours = hours[0];
            var minutes = `${diff/(60)}`.split(".");
            diff = diff%60;
            minutes = minutes[0];
            time.innerText = `${days}d ${hours}h ${minutes}m ${diff.toFixed(0)}s`;
            setX(x+1);
        }, 1_000);
    });
    return (
        <div className="w-[100vw] h-[90vh] lg:h-[95vh] bg-black flex flex-col justify-center items-center">
            <h1 className="text-white text-3xl">Subathon Countdown!</h1>
            <h1 id="time" className="text-white text-6xl"></h1>
        </div>
    );
}
