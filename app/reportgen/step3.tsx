"use client";
import { ReportGenCommonProps } from "./common";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-latex";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import { gql, useMutation } from "@apollo/client";
import ButtonYellow2 from "../Components/Buttons/ButtonYellow2";
import { useEffect, useState } from "react";
import { CurrentView } from "./types";

const RETRIEVE_PDF = gql`
  mutation CreatePDF($texFile: String) {
    CreatePDF(texFile: $texFile) {
      pdf
    }
  }
`;
export default function Step3(props: ReportGenCommonProps) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { setOutputData } = props;
  const [getPDF, { loading, error }] = useMutation(RETRIEVE_PDF);
  const [pdfData, setPdfData] = useState<string>("");
  const { outputData,setCurrentView } = props;
  async function retrievePDF() {
    const data = await getPDF({ variables: { texFile: outputData } });
    const base64PDF = data.data.CreatePDF.pdf;
    setPdfData(base64PDF);
  }
  function updateContent(content: string) {
    setOutputData(content);
  }
  function editPages() {
    setCurrentView(CurrentView.SHOW_PAGES_VIEW) 
  }

  useEffect(() => {
    retrievePDF();
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  return (
    <div className="h-screen flex flex-col gap-2">
      <div className="h-full grid grid-cols-1">
        {pdfData.length > 0 && (
        <object data={`data:application/pdf;base64,${pdfData}`} type="application/pdf" width="100%" height="100%">
          <p>Alternative text - include a link <a href="http://afrticau.edu/images/default/sample.pdf">to the PDF!</a></p>
    </object>
        )}
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
  );
}
