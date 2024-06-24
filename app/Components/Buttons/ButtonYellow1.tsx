import { MouseEventHandler } from "react";

export default function ButtonYellow1({content, onClick } : { content: String, onClick: MouseEventHandler}) {
  return (
    <button onClick={onClick} className="bg-[#FFB800] py-3 px-12 text-lg text-white font-extrabold rounded-3xl">
      {content}
    </button>
  );
}
