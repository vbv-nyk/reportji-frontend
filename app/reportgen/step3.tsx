import { ReportGenCommonProps } from "./common";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-latex";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import { gql, useMutation } from "@apollo/client";
import ButtonYellow2 from "../Components/Buttons/ButtonYellow2";
import { useEffect } from "react";

const RETRIEVE_PDF = gql`
  mutation CreatePDF($texFile: String) {
    CreatePDF(texFile: $texFile) {
      pdf
    }
  }
`;
export default function Step3(props: ReportGenCommonProps) {
  const { setCurrentView, setCurrentPage, pages, setOutputData } = props;
  const [getPDF, { loading, error }] = useMutation(RETRIEVE_PDF);
  const { outputData } = props;
  async function retrievePDF() {
    const data = await getPDF({ variables: { texFile: outputData } });
    const pdfData = (data.data.CreatePDF.pdf);
    console.log(pdfData);
  }
  function updateContent(content: string) {
      setOutputData(content);
  }

  useEffect(() => {
    retrievePDF();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2">
        <AceEditor
          mode={"latex"}
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
        <ButtonYellow2 content={"Compile Document"} onClick={retrievePDF} />
        <ButtonYellow2 content={"Download"} onClick={retrievePDF} />
      </div>
    </div>
  );
}
