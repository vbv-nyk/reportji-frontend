import { ReportGenCommonProps } from "../common";

export default function ViewPagesHeader(props: ReportGenCommonProps) {
    return (<div className="flex flex-col gap-8 items-center">
      <p className="text-white font-bold">
        Create, View, Reorder Or Delete Chapters!
      </p>
    </div>)
}