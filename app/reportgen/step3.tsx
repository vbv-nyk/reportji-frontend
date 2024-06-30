import { ReportGenCommonProps } from "./common";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-latex";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
export default function Step3(props: ReportGenCommonProps) {
  const { outputData } = props;
  console.log(outputData);
  return (
    <div>
      <AceEditor
        mode={"latex"}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
        value={outputData}
      />
    </div>
  );
}
