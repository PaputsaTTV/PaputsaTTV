var txt = [
    "Tier 1 Sub = 5 minutes",
    "Tier 2 Sub = 10 minutes",
    "Tier 3 Sub = 15 minutes",
    "500 bits = 5 minutes",
    "$5 donation = 5 minutes",
    "2 hours minimum",
    "12 hours maximum, if hit 12 hours, uncapped subathon will be planned",
    "1k subs = order maid outfit",
    "Stream wide 5k bits = scarab for a week",
    "Stream wide 10k bits = scarab for a month",
    "Drinking stream starts at 9 hour mark"
]

export default function App() {
    return (
        <div className="w-[100vw] h-[90vh] lg:h-[95vh] bg-black flex flex-col justify-center items-center">
            <ul className="list-disc text-white text-md">
                {txt.map(i=>{
                    return (
                        <li key={i} className="p-2">
                            {i}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}
