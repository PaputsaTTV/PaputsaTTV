import Link from "next/link";

const Card = props => {
    var href = props.href;
    var name = props.name;
    return (
        <div className="rounded transition-all text-white w-[40vw] h-[10vh] md:h-[5vh] border-4 border-white bg-black hover:text-[#ff0000] hover:border-[#ff0000] text-center text-3xl md:text-top md:text-lg md:pb-4">
            <Link className="w-[20vw] h-[10vh]" href={href} passHref>
                <h1 className="text-center">{name}</h1>
            </Link>
        </div>
    )
};

export default Card;