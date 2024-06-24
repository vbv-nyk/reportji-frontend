import Link from "next/link";
import ButtonBlue1 from "../Components/Buttons/ButtonBlue1";
import ButtonWhite2 from "../Components/Buttons/ButtonWhite2";
import Navbar from "../Components/Navbar";
import Logo1 from "../Components/Images/Logo1";

export default function Page() {
    return <>
        <div className="h-screen grid grid-cols-2">
            <div className="flex flex-col items-center">
                    <div className="-mb-16 self-start">
                        <Logo1/>
                    </div>
                    <img className="h-[300px] " src="images/generate_report.png"></img>
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex flex-col">
                            <p className="font-extrabold">Add Content And Get Your Report Ready In Minutes!</p>
                            <div className="text-center text-xl font-extrabold uppercase">T<span className="underline underline-offset-8">ry no</span>w!</div>
                        </div>
                        <Link href={"/reportgen"}>
                            <ButtonBlue1/>
                        </Link>
                    </div>
            </div>
            <div className="h-full grid grid-rows-[100px_auto] bg-[#00162B]">
                <div className="w-full place-self-center self-center max-w-[500px] ">
                    <Navbar/>
                </div>
                <div>
                    <img className="px-12 -mt-[8px] h-[300px] min-w-[300px]" src="images/file_conversion.png"></img>
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex flex-col">
                            <p className="font-extrabold text-white">Easy File Conversion From One Format To Another!</p>
                            <div className="text-center text-xl text-white font-extrabold uppercase">T<span className="underline underline-offset-8">ry no</span>w!</div>
                        </div>
                        <ButtonWhite2/>
                    </div>
                </div>
            </div>
        </div> 
    </>
}