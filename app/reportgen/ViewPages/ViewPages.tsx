"use client";
import ButtonYellow1 from "@/app/Components/Buttons/ButtonYellow1";
import { ReportGenCommonProps } from "../common";
import { CurrentView } from "../types";
import ButtonYellow2 from "@/app/Components/Buttons/ButtonYellow2";
import { PageToJi } from "./language";
import { gql, useMutation } from "@apollo/client";
import { useLazyQuery } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import {
  DragDropContext,
  OnDragEndResponder,
  Droppable,
  DroppableProvided,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

const CREATE_FILE = gql`
  mutation getOutputTex($inputJi: String!) {
    CreateTexFile(inputJi: $inputJi) {
      err
      errMsg
      tex
    }
  }
`;
export default function ViewPages(props: ReportGenCommonProps) {
  const { setCurrentView, setCurrentPage, pages, setPages, setOutputData } =
    props;
  const [getReport, { loading, error }] = useMutation(CREATE_FILE);

  function newChapter() {
    setCurrentPage(pages.length);
    setCurrentView(CurrentView.ENTER_CHAPTER_VIEW);
  }

  function editChapter(index: number) {
    setCurrentPage(index);
    setCurrentView(CurrentView.ENTER_CONTENT_VIEW);
  }
  function deleteChapter(index: number) {
    const pagesClone = pages.filter((page, i) => {
      return index != i;
    });
    setPages(pagesClone);
  }

  async function generateReport() {
    let inputJi = "stlyes = {\n}\n";
    console.log(pages);
    const pagesData = PageToJi(pages);
    inputJi = inputJi.concat(`pages = {\n${pagesData}\n}\n`);
    inputJi = inputJi.concat("output = {\n}");
    console.log(inputJi);
    const data = await getReport({ variables: { inputJi } });
    const { CreateTexFile } = data.data;
    setOutputData(CreateTexFile.tex);
    setCurrentView(CurrentView.REPORT_VIEW);
  }

  let PageList;
  if (pages.length == 0) {
    PageList = () => (
      <div>
        <div className="text-white font-bold text-3xl">Your Pages</div>
        <div className="text-white font-light">
          You do not have any chapters yet, click below to start a new chapter.
        </div>
      </div>
    );
  } else {
    PageList = (provided: DroppableProvided) => (
      <div ref={provided.innerRef} {...provided.droppableProps}>
        {pages.map((page, index) => {
          return (
            <Draggable draggableId={`${index}`} index={index}>
              {(childProvided) => (
                <div
                  {...childProvided.draggableProps}
                  {...childProvided.dragHandleProps}
                  ref={childProvided.innerRef}
                  key={index}
                  className="flex border-black border-2 w-full bg-gray-300 rounded-lg px-4 py-2 justify-between items-center"
                >
                  <div className="text-md whitespace-nowrap">{page.name}</div>
                  <div className="flex gap-4 ">
                    <ButtonYellow2
                      content={"Edit"}
                      onClick={() => {
                        editChapter(index);
                      }}
                    />
                    <ButtonYellow2
                      content={"Delete"}
                      onClick={() => {
                        deleteChapter(index);
                      }}
                    />
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Draggable>
          );
        })}
      </div>
    );
  }
  function onDragEnd(result: DropResult) {
    const pagesClone = pages.map(page=>page);
    const {destination, source, draggableId} = result;
    
    if(!destination) return;
    if(destination.index == source.index) return;
    
    [pagesClone[source.index], pagesClone[destination.index]] = [pagesClone[destination.index], pagesClone[source.index]];
    
    
    setPages(pagesClone);
  }
  return (
    <div className="w-full flex flex-col gap-5">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="UniqueID1">
          {(provided) => {
            return PageList(provided);
          }}
        </Droppable>
      </DragDropContext>
      <div className="flex gap-4">
        <ButtonYellow2 onClick={newChapter} content={"Add Page"} />
        {pages.length != 0 && (
          <ButtonYellow2
            onClick={generateReport}
            content={"Give Me My Report!!!"}
          />
        )}
      </div>
    </div>
  );
}
