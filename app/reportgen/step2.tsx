import {
  ChangeEvent,
  ChangeEventHandler,
  LegacyRef,
  MouseEventHandler,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import ButtonYellow1 from "../Components/Buttons/ButtonYellow1";
import ButtonYellow2 from "../Components/Buttons/ButtonYellow2";
import { ElementParentType, PdfElement } from "../types/types";
import getElementName, {
  getElementType,
  getParentType,
} from "../types/elements";
import Accordion from "./Accordion/accordion";
import { TakeInput } from "./common";

export default function Step2() {
  const [editIndex, setEditIndex] = useState(-1);
  const [elements, setElements] = useState<PdfElement[]>([]);
  const content = "";
  const defaultType = "Title";


  const props = { defaultType, setElements, elements, editIndex, setEditIndex, content};
  return (
    <div className="flex flex-col gap-8 w-full">
        <Accordion {...props}/>
      {editIndex == -1 && 
        <TakeInput {...props}/>
      }
    </div>
  );
}
