import { Dispatch, SetStateAction } from "react";
import ButtonYellow1 from "../Components/Buttons/ButtonYellow1";

export default function Step1({setCurrentView} : {setCurrentView: Dispatch<SetStateAction<number>>}){ 
    function nextPage() {
        setCurrentView(2);
    } 
    return (<div className="h-full flex flex-col gap-20 items-center justify-around">
        <input className="px-2 py-3 w-full rounded-lg text-center font-extrabold text-xl" placeholder="Enter The Chapter Name Here"/>
        <ButtonYellow1 content={"Next"} onClick={nextPage}/>
    </div>)
}