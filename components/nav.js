import Link from "next/link";

function isOn(current, page) {
    return current === page ? "font-bold text-yellow-500" : "text-white"
}

var Navbar = props => {
    return (
        <div className="w-[100vw] text-2xl h-[10vh] lg:h-[5vh] bg-[#101010] flex flex-col items-center justify-center">
            <div className="mx-5 grid grid-auto-cols grid-cols-3 justify-center items-center py-4 gap-8">
                <Link className="w-[20vw] h-[10vh] cursor-pointer px-8" href="/home" passHref>
                    <h1 className={"cursor-pointer text-center " + isOn("home", props.page)}>Home</h1>
                </Link>
                <Link className="w-[20vw] h-[10vh] cursor-pointer px-8" href="/links" passHref>
                    <h1 className={"cursor-pointer text-center " + isOn("links", props.page)}>Links</h1>
                </Link>
                <Link className="w-[20vw] h-[10vh] cursor-pointer px-8" href="/about" passHref>
                    <h1 className={"cursor-pointer text-center " + isOn("about", props.page)}>About</h1>
                </Link>
            </div>            
        </div>
    );
}
export default Navbar;