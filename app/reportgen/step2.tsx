import { ChangeEvent, ChangeEventHandler, LegacyRef, MouseEventHandler, RefObject, useEffect, useRef, useState } from "react";
import ButtonYellow1 from "../Components/Buttons/ButtonYellow1";
import ButtonYellow2 from "../Components/Buttons/ButtonYellow2";
import { ElementParentType, PdfElement } from "../types/types";
import { getElementType, getParentType } from "../types/elements";

export default function Step2() {
  const [currentType, setCurrentType] = useState("Title");
  const [elements, setElements] = useState<PdfElement[]>([]);
  const inputElement = useRef<HTMLInputElement>(null); 
  const textAreaElement = useRef<HTMLTextAreaElement>(null); 

  const changeType = (e:ChangeEvent<HTMLSelectElement>) => {
    setCurrentType(e.target.value);
  }

  const addElement = () => {
    let elementType = getElementType(currentType);
    let content: String | undefined;
    const parentType = getParentType(currentType);

    if(inputElement != null && parentType == ElementParentType.SCALAR) {
      content = inputElement.current?.value;
      if(!content) return;
      setElements([...elements, {type: parentType, element: {content, type: elementType}}]) ;
    }
    
    if(textAreaElement != null && parentType == ElementParentType.VECTOR) {
      content = textAreaElement.current?.value;
      if(!content) return;
      setElements([...elements, {type: parentType, element: {content, type: elementType}}]) ;
    }
    
  }

  const GetCurrentInput = () => {
    switch(currentType) {
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
            />
          </div>
        )
      case "Paragraphs":
      case "Items":
      case "Figures":
      case "Citations":
        return (
          <div className="w-full flex-grow h-full">
            <textarea ref={textAreaElement} className="w-full h-full rounded-lg p-4 resize-none"/>            
          </div>
        )
    }
  }
  return (
    <div className="flex  flex-col px-8 py-4 rounded-lg gap-4 h-max bg-gray-300 ">
      <div className="flex flex-col gap-4 justify-between">
        <select
          id="types"
          name="types"
          className="bg-white font-bold w-fit rounded-md pl-3 pr-4 py-3"
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
        {GetCurrentInput()}
      </div>
      <div className="self-start justify-self-end">
        <ButtonYellow2 content="Add Element" onClick={addElement} />
      </div>
    </div>
  );
}
