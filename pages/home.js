import Image from "next/image";

export default function Home () {
    return (
        <div className="w-[100vw] h-[90vh] lg:h-[95vh] bg-black flex justify-center items-center">
            <div className="w-[70vw] grid grid-rows-2 grid-cols-2 grid-flow-col">
                <div className="col-start-1 col-end-1 w-[20vw] h-[20vh] rounded-md bg-[#050505] flex justify-center items-center">
                    <div className="gap-12 flex justify-left items-center">
                        <Image width={100} height={100} alt="logo" src="/logo.png" className="rounded-full shadow-2xl brightness-125"/>
                        <div className="flex flex-col justify-center items-start">
                            <h1 className="text-3xl text-yellow-500">PapRL</h1>
                            <h1 className="text-xl text-yellow-500">{'"Calculated Chaos"'}</h1>
                        </div>
                    </div>
                </div>
                <div className="row-start-2 row-end-2 col-start-2 col-end-2 w-full h-[30vh] rounded-md bg-[#050505] flex justify-center items-center p-4">
                    <div className="gap-12 flex justify-left items-center">
                        <h1 className="text-2xl text-yellow-500">PapRL is a Twitch streamer aspiring to be a full time streamer. Stop by for one of the best times of your life!</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}