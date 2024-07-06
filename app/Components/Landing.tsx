import Link from "next/link";
import Navbar from "./Navbar";
import ButtonWhite1 from "./Buttons/ButtonWhite1";
import Logo2 from "./Images/Logo2";
import { useEffect } from "react";
import { BACKEND_URL } from "../constants";

export default function Landing() {
  return (
    <div className="flex flex-col bg-[#01162B] h-screen">
      <div className="flex h-max items-center justify-around">
        <Logo2 />
        <Navbar />
      </div>
      <div className="md:h-full md:grid md:grid-cols-[1fr_1fr]">
        <div className="flex flex-col gap-8 justify-center items-center ">
          <img
            className="max-h-[400px] lg:hidden"
            src="images/laptop-report.webp"
          ></img>
          <div className="flex flex-col gap-4 ">
            <div className="flex flex-col">
              <div className="text-white font-extrabold text-3xl">
                Report Making
              </div>
              <div className="text-white font-extrabold text-3xl">
                Made{" "}
                <span className="font-extrabold text-yellow-400 text-3xl">
                  Easier.
                </span>
              </div>
            </div>
            <Link href={"/choice"}>
              <ButtonWhite1 />
            </Link>
          </div>
        </div>
        <div className="shrink-0 hidden lg:h-full md:grid grid-rows-[25%_25%_25%_25%] grid-cols-3">
            <img className="row-start-1 row-end-3 col-start-1 col-end-2 z-10 h-full self-center justify-self-center max-h-[150px] aspect-[20/10]" src="images/guy_left.png"></img>
            <img className="row-start-1 row-end-3 col-start-3 col-end-4 z-10 h-full max-h-[300px] self-center justify-self-start" src="images/guy_right.png"></img>
            <img className="row-start-1 row-end-5 col-start-1 h-full justify-self-center max-w-3/4 col-end-4 self-center "src="images/big_guy.jpeg"></img>
        </div>
      </div>
    </div>
  );
}
