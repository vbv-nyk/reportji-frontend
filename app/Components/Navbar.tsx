export default function Landing() {
    return <div className="grid grid-cols-2 h-screen bg-[#01162B] ">
        <div className="pl-20 grid grid-rows-[160px_auto]">
                <img className="h-full" src="logo.jpeg"></img>
            <div className="h-full flex-col pt-20 gap-8 pl-16  flex text-white font-extrabold">
                    <div className="flex flex-col text-3xl ">
                       <div>Report Making</div>      
                       <div>Made <span className="text-[#FFB800]">Easier.</span></div>      
                    </div> 
                    <button className="text-black text-lg self-start uppercase bg-white rounded-2xl py-1 px-8 font-extrabold">Try Now</button>
            </div>
        </div>
        <div className="grid grid-rows-[100px_auto]">
            <div className="flex justify-around items-center px-12 font-extrabold text-white uppercase">
                <div>Home</div>
                <div>Sign In</div>
                <div>Docs</div>
                <div>Contact Us</div>
            </div>
            <div className="h-full">
                    <img className="h-11/12 w-11/12" src="meditation.jpeg"></img>
            </div>
        </div>
    </div>
}