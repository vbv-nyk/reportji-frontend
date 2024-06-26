import ButtonYellow1 from "@/app/Components/Buttons/ButtonYellow1";
import ButtonYellow2 from "@/app/Components/Buttons/ButtonYellow2";
import getElementName from "@/app/types/elements";
import { PdfElement } from "@/app/types/types";

export default function Accordion({ elements }: { elements: PdfElement[] }) {
  const editContent = () => {};
  const elementsJSX = elements.map((element) => {
    const elementName = getElementName(element.element.type);
    return (
      <div className="flex gap-8 w-full bg-gray-300 rounded-lg px-8 py-4 justify-between">
        <div className="w-full px-[30px] flex flex-shrink-[2] justify-center items-center align-middle text-center font-bold bg-white rounded-lg">
          {elementName}
        </div>
        <div className="p-4 flex-grow-[3] align-middle overflow-hidden w-full text-ellipsis whitespace-nowrap bg-white rounded-lg">
          {element.element.content}
        </div>
        <div className="flex gap-2 ">
          <ButtonYellow2 content={"Edit"} onClick={editContent} />
        </div>
      </div>
    );
  });
  return (
    <div className="flex flex-col gap-8 rounded-lg w-full">{elementsJSX}</div>
  );
}
