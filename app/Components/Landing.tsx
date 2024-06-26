import Link from "next/link";
import Navbar from "./Navbar";
import ButtonWhite1 from "./Buttons/ButtonWhite1";
import Logo2 from "./Images/Logo2";
import { useEffect } from "react";
import { BACKEND_URL } from "../constants";

export default function Landing() {
  return (
    <div className="grid grid-cols-[2fr_3fr] h-screen bg-[#01162B] ">
      <div className="pl-20 grid grid-rows-[160px_auto]">
        <Logo2/>
        <div className="h-full flex-col pt-20 gap-8 pl-16  flex text-white font-extrabold">
          <div className="flex flex-col text-3xl ">
            <div>Report Making</div>
            <div>
              Made <span className="text-[#FFB800]">Easier.</span>
            </div>
          </div>
          <Link href={"/choice"}>
            <ButtonWhite1 />
          </Link>
        </div>
      </div>
      <div className="h-full grid grid-rows-[100px_auto]">
        <div className="w-full place-self-center self-center max-w-[500px] ">
          <Navbar />
        </div>
        <div className="h-full pr-20">
          <div className="h-full grid grid-rows-[25%_25%_25%_25%] justify-items-start items-center  grid-cols-3">
            <img
              className="h-1/2 col-start-1 col-end-2 row-start-1 justify-self-start row-end-3 z-10"
              src="images/guy_left.png"
            ></img>
            <img
              className="h-1/2 col-start-3 col-end-4 row-start-1 row-end-3 z-10 justify-self-start"
              src="images/guy_right.png"
            ></img>
            <img
              className="h-full w-max col-start-1 col-end-4 row-start-1 row-end-5"
              src="images/big_guy.jpeg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
