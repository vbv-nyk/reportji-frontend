import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  LegacyRef,
  MouseEventHandler,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import ButtonYellow1 from "../Components/Buttons/ButtonYellow1";
import ButtonYellow2 from "../Components/Buttons/ButtonYellow2";
import { ElementParentType, Page, Pages, PdfElement } from "../types/types";
import getElementName, {
  getElementType,
  getParentType,
} from "../types/elements";
import Accordion from "./Accordion/accordion";
import { ReportGenCommonProps, TakeInput } from "./common";
import { CurrentView } from "./types";

export default function Step2(props: ReportGenCommonProps) {
  const [editIndex, setEditIndex] = useState(-1);
  const [elements, setElements] = useState<Page>([]);
  const content = "";
  const defaultType = "Title";
  
  const {setPages, currentPage, pages} = props;
  function saveCurrentPage() {
      const pagesClone = pages.map(page => page);
      pagesClone[currentPage] = elements;
      setPages(pagesClone);
      setCurrentView(CurrentView.SHOW_PAGES_VIEW);
  }


  const {setCurrentView} = props;
  const current_props = { defaultType, setElements, elements, editIndex, setEditIndex, content};
  return (
    <div className="flex flex-col gap-8 w-full">
        <Accordion {...current_props}/>
      {editIndex == -1 && 
        <TakeInput {...current_props}/>
      }
      <div className="flex gap-3">
        <ButtonYellow2 content={"Save Chapter"} onClick={()=>{saveCurrentPage()}}/>
      </div>
    </div>
  );
}
