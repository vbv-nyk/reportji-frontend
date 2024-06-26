import { ChangeEvent, Dispatch, RefObject, SetStateAction, useRef } from "react";
import { getElementType, getParentType } from "../types/elements";
import { ElementParentType, PdfElement } from "../types/types";
import ButtonYellow2 from "../Components/Buttons/ButtonYellow2";

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
const GetCurrentInput = (inputElement: RefObject<HTMLInputElement>, textAreaElement: RefObject<HTMLTextAreaElement>, currentType: string, content: string) => {
    switch (currentType) {
      case "Title":
      case "Subtitle":
      case "Heading":
      case "Author":
      case "Date":
        return (
          <div className="w-full">
            <input
              ref={inputElement}
              className="w-full py-4 pl-4 font-semibold placeholder:text-gray-500 rounded-md"
              placeholder="Add Your Text Here......"
              defaultValue={content}
            />
          </div>
        );
      case "Paragraphs":
      case "Items":
      case "Figures":
      case "Citations":
        return (
          <div className="w-full flex-grow h-full">
            <textarea
              ref={textAreaElement}
              className="w-full h-full font-semibold rounded-lg p-4 resize-none"
              placeholder="Enter your data, every new paragraph/item starts at a new line."
            />
          </div>
        );
    }
  };

export type Step2Props = {
  currentType: string,
  setCurrentType: Dispatch<SetStateAction<string>>,
  setElements: Dispatch<SetStateAction<PdfElement[]>>,
  elements: PdfElement[]
  editIndex: number;
  setEditIndex: Dispatch<SetStateAction<number>>;
  content: string
}

export function TakeInput(props: Step2Props) {
  const {currentType, setCurrentType, setElements, elements, content}  = props;
  const inputElement = useRef<HTMLInputElement>(null);
  const textAreaElement = useRef<HTMLTextAreaElement>(null);
  const changeType = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentType(e.target.value);
  };

  const addElement = () => {
    let elementType = getElementType(currentType);
    let content: string;
    const parentType = getParentType(currentType);

    if (inputElement != null && parentType == ElementParentType.SCALAR) {
      if (inputElement.current) {
        content = inputElement.current.value;
        if (content === "") return;
        setElements([
          ...elements,
          { type: parentType, element: { content, type: elementType } },
        ]);
        inputElement.current.value = "";
      }
    }

    if (textAreaElement != null && parentType == ElementParentType.VECTOR) {
      if (textAreaElement.current) {
        content = textAreaElement.current.value;
        if (content === "") return;
        setElements([
          ...elements,
          { type: parentType, element: { content, type: elementType } },
        ]);
        textAreaElement.current.value = "";
      }
    }
  };
 return (
<div className="flex  flex-col px-8 py-4 rounded-lg gap-4 h-max bg-gray-300 w-full">
        <div className="flex flex-col gap-4 justify-between">
          <select
            id="types"
            name="types"
            className="bg-white font-bold flex-grow w-fit rounded-md pl-3 pr-4 py-3"
            onChange={changeType}
          >
            <option value="Title">Title</option>
            <option value="Subtitle">Subtitle</option>
            <option value="Heading">Heading</option>
            <option value="Author">Author</option>
            <option value="Date">Date</option>
            <option value="Paragraphs">Paragraphs</option>
            <option value="Items">Items</option>
            <option value="Figures">Figures</option>
            <option value="Citations">Citations</option>
            <option value="Differences">Differences</option>
          </select>
          {GetCurrentInput(inputElement, textAreaElement, currentType, content)}
          <div className="self-start">
            <ButtonYellow2 onClick={addElement} content={"Add Element"} />
          </div>
        </div>
        </div>
  
 ) 
}