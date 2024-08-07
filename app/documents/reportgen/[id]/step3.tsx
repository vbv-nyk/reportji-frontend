"use client";
import { ReportGenCommonProps } from "./common";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-latex";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import { gql, useMutation } from "@apollo/client";
import ButtonYellow2 from "../../../Components/Buttons/ButtonYellow2";
import { useEffect, useState } from "react";
import { CurrentView } from "./types";

const RETRIEVE_PDF = gql`
  mutation CreatePDF($texFile: String!, $docID: Int!) {
    CreatePDF(texFile: $texFile, docID: $docID) {
      pdf
      document_id
    }
  }
`;
export default function Step3(props: ReportGenCommonProps) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { setOutputData } = props;
  const [getPDF, { loading, error }] = useMutation(RETRIEVE_PDF);
  const [pdfData, setPdfData] = useState<string>("");
<<<<<<< HEAD
  const [timestamp, setTimestamp] = useState<number>(0);
=======
>>>>>>> e5ee1ed (Initial commit)
  const { outputData, setCurrentView, documentID } = props;
  async function retrievePDF() {
    try {
      const data = await getPDF({
        variables: { texFile: outputData, docID: documentID },
      });
      const base64PDF = data.data.CreatePDF.pdf;
      console.log(data);
      setPdfData(base64PDF);
<<<<<<< HEAD
      const datetime = new Date().getTime();
      setTimestamp(datetime);
=======
>>>>>>> e5ee1ed (Initial commit)
    } catch (e) {
      console.error("Error occured", e);
    }
  }
  function updateContent(content: string) {
    setOutputData(content);
  }
  function editPages() {
    setCurrentView(CurrentView.SHOW_PAGES_VIEW);
  }

  useEffect(() => {
    retrievePDF();
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  return (
    <div className="h-full w-screen flex flex-col gap-2">
      <div className="h-full grid grid-cols-1 gap-2">
        <div className="flex flex-col gap-2 h-full">
          <div className="h-screen">
            <AceEditor
              mode={"latex"}
              height="100%"
              width="100%"
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
              }}
              value={outputData}
              onChange={updateContent}
            />
          </div>
          <div className="flex gap-2 ">
            <ButtonYellow2 content={"Go Back"} onClick={editPages} />
            <ButtonYellow2 content={"Run Code"} onClick={retrievePDF} />
          </div>
        </div>
        <div className="h-screen">
          {pdfData.length > 0 && (
            <object
<<<<<<< HEAD
              data={`${pdfData}?v=${timestamp}`}
=======
              data={`${pdfData}`}
>>>>>>> e5ee1ed (Initial commit)
              // type="application/pdf"
              width="100%"
              height="100%"
            ></object>
          )}
        </div>
      </div>
    </div>
  );
}
