import Link from "next/link";

export default function Error404 () {
    return (
        <div className="w-full h-[90vh] lg:h-[95vh] bg-black flex justify-center items-center">
            <Link className="text-red-700 text-2xl text-center cursor-pointer" href="/home" passHref>
                <h1 className="text-red-700 text-2xl text-center cursor-pointer">There seems to be a problem, click me to go to the home page.</h1>
            </Link>
        </div>
    )
}