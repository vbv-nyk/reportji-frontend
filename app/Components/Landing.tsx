import Link from "next/link";
import Navbar from "./Navbar";
import ButtonWhite1 from "./Buttons/ButtonWhite1";
import Logo2 from "./Images/Logo2";
import { useEffect } from "react";
import { BACKEND_URL } from "../constants";

export default function Landing() {
  return (
    <div className="bg-[#01162B] h-screen">
      <div className="flex items-center justify-around">
        <Logo2/>
        <Navbar />
      </div>
      <div className="">
        <div className="flex flex-col gap-8 justify-center items-center">
            <img
              className=""
              src="images/laptop-report.webp"
            ></img>
          <div className="">
            <div className="text-white font-extrabold text-3xl">Report Making</div>
            <div className="text-white font-extrabold text-3xl">
              Made <span className="font-extrabold text-yellow-400 text-3xl">Easier.</span>
            </div>
          </div>
          <Link href={"/choice"}>
            <ButtonWhite1 />
          </Link>
        </div>
        <div className="">
        </div>
        <div className="hidden">
          <div className="">
            <img
              className=""
              src="images/guy_left.png"
            ></img>
            <img
              className=""
              src="images/guy_right.png"
            ></img>
            <img
              className=""
              src="images/big_guy.jpeg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
