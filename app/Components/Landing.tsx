export default function Landing() {
  return (
    <div className="grid grid-cols-2 h-screen bg-[#01162B] ">
        <div className="pl-20 grid grid-rows-[160px_auto]">
                <img className="h-full" src="images/logo_blue.png"></img>
            <div className="h-full flex-col pt-20 gap-8 pl-16  flex text-white font-extrabold">
                    <div className="flex flex-col text-3xl ">
                       <div>Report Making</div>      
                       <div>Made <span className="text-[#FFB800]">Easier.</span></div>      
                    </div> 
                    <button className="text-black text-lg self-start uppercase bg-white rounded-2xl py-1 px-8 font-extrabold">Try Now</button>
            </div>
        </div>
        <div className="h-full grid grid-rows-[100px_auto]">
            <div className="h-full flex justify-around items-center px-12 font-extrabold text-white uppercase">
                <div>Home</div>
                <div>Sign In</div>
                <div>Docs</div>
                <div>Contact Us</div>
            </div>
            <div className="h-full">
              <div className="h-full grid grid-rows-[25%_25%_25%_25%] justify-items-start items-center  grid-cols-3">
                    <img className="h-1/2 col-start-1 col-end-2 row-start-1 justify-self-start row-end-3 z-10" src="images/guy_left.png"></img>
                    <img className="h-1/2 col-start-3 col-end-4 row-start-1 row-end-3 z-10 justify-self-start" src="images/guy_right.png"></img>
                    <img className="h-full w-max col-start-1 col-end-4 row-start-1 row-end-5" src="images/big_guy.jpeg"></img>
              </div>
            </div>
        </div>
    </div>
  );
}