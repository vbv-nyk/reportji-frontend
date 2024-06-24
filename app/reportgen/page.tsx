import Logo2 from "../Components/Images/Logo2";
import Navbar from "../Components/Navbar";

export default function Page() {
    return <div className="h-screen pt-6 bg-[#01162B] grid grid-rows-[150px_10px_auto]">
        <div className="flex justify-between">
            <div className="pl-10">
               <Logo2/>
            </div>
           <div className="w-full max-w-[500px] ">
               <Navbar/>
           </div>
        </div>
        <div></div>
        <div></div>
    </div>
}