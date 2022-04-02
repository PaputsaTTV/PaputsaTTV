import Image from "next/image";
import Card from "../components/card.js";

export default function Links() {
  const links = [
    ["Twitch", "https://www.twitch.tv/paprl"],
    ["YouTube", "https://www.youtube.com/user/Zeus6988/featured"],
    ["Discord", "https://discord.com/invite/qxDsHsNQ2H"],
    ["Merch", "https://streamlabs.com/paputsa/merch"],
    ["Twitter", "https://twitter.com/Paputsattv"],
    ["TikTok", "https://www.tiktok.com/\@papttv"],
    ["Instagram", "https://www.instagram.com/papttv/"],
    ["Podcast", "https://open.spotify.com/show/4LUFSyNRhbuxSIkdf9okhm?si=75247a7f96be40d2"],
    ["Only Fans", "https://youtu.be/dQw4w9WgXcQ"]
  ]
  return (
    <div className="w-[100vw] h-[90vh] lg:h-[95vh] bottom-0 flex flex-col justify-center items-center bg-black">
      <div className="sm:w-[80vw] w-[20vw] h-[25vh] text-center flex flex-col justify-start items-center gap-2 blur-none">
        <div className="rounded-full p-4 drop-shadow-2xl">
          <Image width={100} height={100} alt="logo" src="/logo.png" className="rounded-full drop-shadow-2xl brightness-125"/>
        </div>
      </div>
      <div className="w-[20vw] md:h-[20h] h-[50vh] flex flex-col justify-center items-center gap-2 py-4 md:top-0">
        <Card name={links[0][0]} href={links[0][1]} />
        <Card name={links[1][0]} href={links[1][1]} />
        <Card name={links[2][0]} href={links[2][1]} />
        <Card name={links[3][0]} href={links[3][1]} />
        <Card name={links[4][0]} href={links[4][1]} />
        <Card name={links[5][0]} href={links[5][1]} />
        <Card name={links[6][0]} href={links[6][1]} />
        <Card name={links[7][0]} href={links[7][1]} />
        <Card name={links[8][0]} href={links[8][1]} />
      </div>
    </div>
  )
}