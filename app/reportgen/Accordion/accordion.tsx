import ButtonYellow2 from "@/app/Components/Buttons/ButtonYellow2";
import getElementName from "@/app/types/elements";
import { Step2Props, TakeInput } from "../common";

export default function Accordion(props: Step2Props) {
  const { page, setEditIndex, editIndex } = props;
  const editContent = (index: number) => {
    setEditIndex(index);
  };

  const elementsJSX = page.elements.map((element, index) => {
    const elementName = getElementName(element.element.type);
    return (
      <>
        {editIndex !== index && (
          <div className="flex gap-8 w-full bg-gray-300 rounded-lg px-8 py-4 justify-between">
            <div className="w-full px-[30px] flex flex-shrink-[2] justify-center items-center align-middle text-center font-bold bg-white rounded-lg">
              {elementName}
            </div>
            <div className="p-4 flex-grow-[1] align-middle overflow-hidden w-full text-ellipsis whitespace-nowrap bg-white rounded-lg">
              {element.element.content}
            </div>
            <div className="flex gap-2 ">
              <ButtonYellow2
                content={"Edit"}
                onClick={() => editContent(index)}
              />
            </div>
          </div>
        )}
        {editIndex === index && (
          <div>
            <TakeInput
              {...props}
              content={element.element.content.toString()}
              defaultType={elementName}
            />
          </div>
        )}
      </>
    );
  });
  return (
    <div className="flex flex-col gap-8 rounded-lg w-full">{elementsJSX}</div>
  );
}
