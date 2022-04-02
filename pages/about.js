import Image from "next/image";
import { useState, useEffect } from "react";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

var things = [
    ['"pap is the most welcoming streamer ive ever met. ive never felt unwanted here."', '- Aayzoc#0694'],
    ['"pap is pog."', '- GameGecko#1177'],
    ['"pap is buff and hot"','- Rdcrustic#2409'],
    ['"Made me feel welcome from day one, Makes sure there is always something fun going on in stream and aims to involve the community in every way possible. My streamer 🥰"','- Cold#7362'],
    ['"Mike is handsomest baby gorl"', '- Morin (ProRacer_QC#3309)']
];
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
  
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
  
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
}
export default function About () {
    var mythings = shuffle(things);
    var [thing, setThing] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            var docthing = document.getElementById("thing");
            var whosaid = document.getElementById("user");
            var testi = document.getElementById("test");
            if (thing+1 === mythings.length) {
                setThing(0);
            } else {
                setThing(thing+1);
            }
            if (docthing && whosaid && testi) {
                docthing.innerText = mythings[thing][0];
                whosaid.innerText = mythings[thing][1];
                testi.innerText = "Testimonial " + (thing+1) + "/" + mythings.length;
            }
        }, 10_000);
    });
    return (
        <div className="w-full h-[90vh] lg:h-[95vh] bg-black flex flex-col justify-center items-center">
            <Image width={100} height={100} alt="logo" src="/logo.png" className="rounded-full drop-shadow-2xl brightness-125"/>
            <h1 className="text-xl text-white px-12 text-center">
                Hello and welcome! I{"'"}m Pap/Paputsa/mike! Aspiring full time streamer who loves Rocket League {"(a few others as well)"} I want this channel to be a second home for all those who need a fun, supportive, and loving community, now let{"'"}s grow and crush our goals together! 🙏❤️🔥
            </h1>
            <div className="text-yellow-500 text-xl pt-8">
                <h1 id="test">Testimonial 1/{mythings.length}</h1>
            </div>
            <div className="w-[60vw] h-[40vh] text-yellow-500 text-lg pb-24 flex flex-col justify-center items-center">
                <h1 className="text-center" id="thing">{mythings[thing][0]}</h1>
                <h1 className="text-center py-4" id="user">{mythings[thing][1]}</h1>
            </div>
        </div>
    )
}