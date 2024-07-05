"use client"
import ButtonYellow1 from "@/app/Components/Buttons/ButtonYellow1";
import { ReportGenCommonProps } from "../common";
import { CurrentView } from "../types";
import ButtonYellow2 from "@/app/Components/Buttons/ButtonYellow2";
import { PageToJi } from "./language";
import { gql, useMutation } from "@apollo/client";
import { useLazyQuery } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

const CREATE_FILE = gql`
  mutation getOutputTex($inputJi: String!) {
    CreateTexFile(inputJi: $inputJi){
        err,
        errMsg,
        tex
    }
  }
`;
export default function ViewPages(props: ReportGenCommonProps) {
  const { setCurrentView, setCurrentPage, pages, setPages, setOutputData} = props;
  const [getReport, { loading, error}] = useMutation(CREATE_FILE);
  
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
    })
    setPages(pagesClone);
  }

  async function generateReport() {
    let inputJi = "stlyes = {\n}\n"
    console.log(pages);
    const pagesData = PageToJi(pages);
    inputJi = inputJi.concat(`pages = {\n${pagesData}\n}\n`);
    inputJi = inputJi.concat("output = {\n}");
    console.log(inputJi);
    const data = await getReport({variables: {inputJi}});
    const {CreateTexFile} = data.data;
    setOutputData(CreateTexFile.tex);
    setCurrentView(CurrentView.REPORT_VIEW);
  }

  let PageList;
  if (pages.length == 0) {
    PageList = (
      <>
        <div className="text-white font-bold text-3xl">Your Pages</div>
        <div className="text-white font-light">
          You do not have any chapters yet, click below to start a new chapter.
        </div>
      </>
    );
  } else {
    PageList = (
      <>
        {pages.map((page, index) => {
          return (
            <div key={index} className="flex gap-8 w-full bg-gray-300 rounded-lg px-8 py-4 justify-between items-center">
              <div className="text-xl">{page.name}</div>
              <div className="flex gap-4">
                <ButtonYellow2
                  content={"Edit Chapter"}
                  onClick={() => {
                    editChapter(index);
                  }}
                />
                <ButtonYellow2
                  content={"Delete Chapter"}
                  onClick={() => {
                    deleteChapter(index);
                  }}
                />
              </div>
            </div>
          );
        })}
      </>
    );
  }
  return (
    <div className="flex flex-col gap-5">
      {PageList}
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
