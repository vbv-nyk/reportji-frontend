import ButtonYellow1 from "@/app/Components/Buttons/ButtonYellow1";
import { ReportGenCommonProps } from "../common";
import { CurrentView } from "../types";
import ButtonYellow2 from "@/app/Components/Buttons/ButtonYellow2";
import { PageToJi } from "./language";

export default function ViewPages(props: ReportGenCommonProps) {
    const {setCurrentView, setCurrentPage, pages}  = props;
    function newChapter() {
       setCurrentPage(pages.length)
       setCurrentView(CurrentView.ENTER_CHAPTER_VIEW);
    }
    
    function editChapter(index: number) {
        setCurrentPage(index);
        setCurrentView(CurrentView.ENTER_CONTENT_VIEW);
    }
    
    function generateReport(){
       PageToJi(pages);
    }
    
    let PageList;
    if (pages.length == 0) {
       PageList = <>
        <div className="text-white font-bold text-3xl">Your Pages</div>
        <div className="text-white font-light">You do not have any chapters yet, click below to start a new chapter.</div>
       </> 
    } else {
       PageList = <>
        {pages.map((page,index) => {
            return <div className="flex gap-8 w-full bg-gray-300 rounded-lg px-8 py-4 justify-between items-center">
                <div className="text-xl">{page.name}</div>
                <div className="">
                    <ButtonYellow2 content={"Edit Chapter"} onClick={()=> {editChapter(index)}}/>
                </div>
            </div>
        })}
       </> 
    }
    return <div className="flex flex-col gap-5">
        {PageList}
        <div className="flex gap-4">
            <ButtonYellow2 onClick={newChapter} content={"Add Page"}/>
            {pages.length != 0 && <ButtonYellow2 onClick={generateReport} content={"Give Me My Report!!!"}/>}
        </div>
    </div>
}