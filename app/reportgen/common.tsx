import {
  ChangeEvent,
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import getElementName, { getElementType, getParentType } from "../types/elements";
import { ElementParentType, Page, Pages} from "../types/types";
import ButtonYellow2 from "../Components/Buttons/ButtonYellow2";
import { CurrentView } from "./types";

export function Common() {
  return (
    <div className="flex flex-col gap-8 items-center">
      <p className="text-white font-bold">
        Just A Few Steps Away From Getting Your Report Ready !
      </p>
    </div>
  );
}

export function Progress({ pageNumber }: { pageNumber: Number }) {
  let color = pageNumber == 1 ? "#6b7280" : "#ffff";
  return (
    <>
      <button
        style={{ color, borderColor: color }}
        className="border-gray-500 text-gray-500  font-bold border-2 px-[10px] text-sm py-1 rounded-[100%]"
      >
        1
      </button>
      <div
        style={{ color, borderColor: color }}
        className="w-20 border border-gray-500"
      ></div>
      <button className="text-gray-500 font-bold border-2 border-gray-500 px-[10px] text-sm py-1 rounded-[100%]">
        2
      </button>
    </>
  );
}

type GetCurrentInputProps = {
  inputElement: RefObject<HTMLInputElement>,
  textAreaElement: RefObject<HTMLTextAreaElement>,
  currentType: string,
  content: string | string[]
}
export function GetCurrentInput  (
  props: GetCurrentInputProps
)  {
  const {content,currentType,inputElement,textAreaElement} = props;
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
            defaultValue={content}
            className="w-full h-full font-semibold rounded-lg p-4 resize-none"
            placeholder="Enter your data, every new paragraph/item starts at a new line."
          />
        </div>
      );
  }
};

export type ReportGenCommonProps = {
  currentView: CurrentView,
  setCurrentView :  Dispatch<SetStateAction<number>>
  pages: Pages,
  setPages: Dispatch<SetStateAction<Pages>>,
  currentPage: number,
  setCurrentPage: Dispatch<SetStateAction<number>>
}

export type Step2Props = {
  setElements: Dispatch<SetStateAction<Page>>;
  elements: Page;
  editIndex: number;
  setEditIndex: Dispatch<SetStateAction<number>>;
  content: string | string[];
  defaultType: string
};

export function TakeInput(props: Step2Props) {
  const {
    setElements,
    elements,
    content,
    editIndex,
    defaultType,
    setEditIndex,
  } = props;
  const inputElement = useRef<HTMLInputElement>(null);
  const textAreaElement = useRef<HTMLTextAreaElement>(null);
  const [currentType, setCurrentType] = useState(defaultType);
  const changeType = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentType(e.target.value);
  };
  console.log(content);

  const addElement = (editIndex: number) => {
    let elementType = getElementType(currentType);
    let content: string;
    const parentType = getParentType(currentType);

    if (inputElement != null && parentType == ElementParentType.SCALAR) {
      if (inputElement.current) {
        content = inputElement.current.value;
        if (content === "") return;
        if (editIndex === -1) {
          setElements([
            ...elements,
            { type: parentType, element: { content, type: elementType } },
          ]);
        } else {
          const newElements = elements.map((element, index) => {
            if (index === editIndex) {
              element.element.content = content;
              element.element.type = elementType;
              element.type = parentType;
              return element;
            } else {
              return element;
            }
          });
          setElements(newElements);
          setEditIndex(-1);
          console.log(newElements);
        }
        inputElement.current.value = "";
      }
    }

    if (textAreaElement != null && parentType == ElementParentType.VECTOR) {
      if (textAreaElement.current) {
        content = textAreaElement.current.value;
        if (content === "") return;
        if (editIndex === -1) {
          setElements([
            ...elements,
            { type: parentType, element: { content, type: elementType } },
          ]);
        } else {
          const newElements = elements.map((element,index) => {
            if(index === editIndex) {
              element.element.content = content;
              element.element.type = elementType;
              element.type = parentType;
              return element;
            } else {
              return element;
            }
          })
          setElements(newElements);
          setEditIndex(-1);
          console.log(newElements)
        }
        textAreaElement.current.value = "";
      }
    }
  };

  const deleteElement = (editIndex: number) => {
    const newElements = elements.filter((element, index) => {
      return index != editIndex;
    })
    setElements(newElements);
    setEditIndex(-1);
  };
  return (
    <div className="flex  flex-col px-8 py-4 rounded-lg gap-4 h-max bg-gray-300 w-full">
      <div className="flex flex-col gap-4 justify-between">
        <select
          id="types"
          name="types"
          className="bg-white font-bold flex-grow w-fit rounded-md pl-3 pr-4 py-3"
          onChange={changeType}
          defaultValue={currentType}
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
        {<GetCurrentInput content={content} currentType={currentType} inputElement={inputElement} textAreaElement={textAreaElement}/>}
        <div className="self-start">
          {editIndex === -1 && (
            <ButtonYellow2
              onClick={() => addElement(editIndex)}
              content={"Add Element"}
            />
          )}
          {editIndex !== -1 && (
            <div className="flex gap-4">
              <ButtonYellow2
                onClick={() => addElement(editIndex)}
                content={"Update"}
              />
              <ButtonYellow2
                onClick={() => deleteElement(editIndex)}
                content={"Delete"}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
