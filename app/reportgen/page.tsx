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
import { BACKEND_PORT, BACKEND_URL } from "../constants";

export default function Page() {
  const [currentView, setCurrentView] = useState(CurrentView.SHOW_PAGES_VIEW);
  const [pages, setPages] = useState<Pages>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [outputData, setOutputData] = useState<string>("");
  const [displayRow, setDisplayRow] = useState(80);

  const client = new ApolloClient({
    uri: `${BACKEND_URL}/graphql`,
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
              <div className="">
                <ViewPagesHeader {...props} />
              </div>
            <div className="flex items-center justify-center"> 
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
      <div className="pt-6 bg-[#01162B] flex flex-col gap-4 min-h-screen h-full">
        <div className="flex justify-around">
              <Logo2 />
              <Navbar />
        </div>
        {HeaderSection()}
        <div className="h-full w-10/12 flex mx-auto">
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
