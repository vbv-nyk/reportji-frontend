import { MouseEventHandler } from "react";

export default function ButtonYellow2({content, onClick } : { content: String, onClick: MouseEventHandler}) {
  return (
    <button onClick={onClick} className="bg-[#FFB800] py-2 px-12 text-lg text-white font-extrabold rounded-lg">
      {content}
    </button>
  );
}
