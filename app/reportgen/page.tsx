import Logo2 from "../Components/Images/Logo2";
import Navbar from "../Components/Navbar";
import { Common, Progress } from "./common";
import Step1 from "./step1";

export default function Page() {
  return (
    <div className="h-screen pt-6 bg-[#01162B] grid grid-rows-[230px_0px] grid-cols-2">
      <div className="grid grid-cols-4 grid-rows-[100px_50px_80px] row-start-1 row-end-3 col-start-1 col-end-3">
        <div className="pl-10 row-start-1 row-end-3 col-start-1 col-end-2">
          <Logo2 />
        </div>
        <div className="w-full justify-self-end col-start-2 col-end-5 max-w-[500px] ">
          <Navbar />
        </div>
        <div className="self-end place-content-end row-start-2 row-end-3 col-start-2 col-end-4">
          <Common />
        </div>
          <div className="flex items-center justify-center row-start-3 row-end-4 col-start-2 col-end-4">
          <Progress/>
        </div>
      </div>
      <div>
        <Step1 />
      </div>
    </div>
  );
}
