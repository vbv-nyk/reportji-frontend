export function Common() {
    return <div className="flex flex-col gap-8 items-center">
        <p className="text-white font-bold">
         Just A Few Steps Away From Getting Your Report Ready !
        </p>
    </div>
}

export function Progress({pageNumber}: {pageNumber: Number}) {
    let color = pageNumber == 1? "#6b7280": "#ffff";
   return <>
            <button style={{color, borderColor: color}} className="border-gray-500 text-gray-500  font-bold border-2 px-[10px] text-sm py-1 rounded-[100%]">
              1
            </button>
            <div style={{color, borderColor: color}} className="w-20 border border-gray-500"></div>
            <button className="text-gray-500 font-bold border-2 border-gray-500 px-[10px] text-sm py-1 rounded-[100%]">
              2
            </button>
   </> 
}