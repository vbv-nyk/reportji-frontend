"use client";
import { useEffect, useState } from "react";
import Logo2 from "../Components/Images/Logo2";
import Navbar from "../Components/Navbar";
import { Common, Progress } from "./common";
import Step1 from "./step1";
import Step2 from "./step2";
import { CurrentView } from "./types";
import { Pages } from "../types/types";
import ViewPages from "./ViewPages/ViewPages";
import ViewPagesHeader from "./ViewPages/ViewPagesHeader";
import { json } from "stream/consumers";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Step3 from "./step3";

export default function Page() {
  const [currentView, setCurrentView] = useState(CurrentView.SHOW_PAGES_VIEW);
  const [pages, setPages] = useState<Pages>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [outputData, setOutputData] = useState<string>("");
  const [displayRow, setDisplayRow] = useState(80);

  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
    credentials: "include",
  });
  useEffect(() => {
    const pagesData = localStorage.getItem("pages");
    if (pagesData !== null) {
      setPages(JSON.parse(pagesData));
    }
  }, []);

  const props = {
    currentView,
    setCurrentView,
    pages,
    setPages,
    currentPage,
    setCurrentPage,
    outputData,
    setOutputData
  };
  
  const HeaderSection  = () => {
    switch(currentView) {
      case CurrentView.SHOW_PAGES_VIEW: 
          return <>
              <div className="self-end place-content-end row-start-2 row-end-3 col-start-2 col-end-4">
                <ViewPagesHeader {...props} />
              </div>
            <div className="flex items-center justify-center row-start-3 row-end-4 col-start-2 col-end-4">
              <Progress pageNumber={currentView} />
            </div>
          </>
      case CurrentView.ENTER_CHAPTER_VIEW:
      case CurrentView.ENTER_CONTENT_VIEW:
          return <>
                <div className="self-end place-content-end row-start-2 row-end-3 col-start-2 col-end-4">
                  <Common />
                </div>
            <div className="flex items-center justify-center row-start-3 row-end-4 col-start-2 col-end-4">
              <Progress pageNumber={currentView} />
            </div>
          </>
      default: 
        return <></>
    }
  }
  
  useEffect(() => {
    if(currentView == CurrentView.REPORT_VIEW){
        setDisplayRow(0);
    } else {
      setDisplayRow(80);
    }
  }, [currentView])
  return (
    <ApolloProvider client={client}>
      <div className="pt-6 bg-[#01162B] flex flex-col gap-4 min-h-screen h-max">
        <div className=" grid grid-rows-[230px_0px] grid-cols-2">
          <div className={`grid grid-cols-4 grid-rows-[100px_50px_${displayRow}px] row-start-1 row-end-3 col-start-1 col-end-3`}>
            <div className="pl-10 row-start-1 row-end-3 col-start-1 col-end-2">
              <Logo2 />
            </div>
            <div className="w-full justify-self-end col-start-2 col-end-5 max-w-[500px] ">
              <Navbar />
            </div>
            {HeaderSection()}
          </div>
        </div>
        <div className="h-full col-start-1 pb-5 col-end-3 w-10/12 mx-auto">
          {currentView == CurrentView.SHOW_PAGES_VIEW && (
            <ViewPages {...props} />
          )}
          {currentView == CurrentView.ENTER_CHAPTER_VIEW && (
            <Step1 {...props} />
          )}
          {currentView == CurrentView.ENTER_CONTENT_VIEW && (
            <Step2 {...props} />
          )}
          {currentView == CurrentView.REPORT_VIEW && (
            <Step3 {...props}/>
          )}
        </div>
      </div>
    </ApolloProvider>
  );
}
