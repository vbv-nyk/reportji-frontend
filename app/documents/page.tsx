"use client";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import Logo2 from "../Components/Images/Logo2";
import Navbar from "../Components/Navbar";
import { BACKEND_URL } from "../constants";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Page() {
    const [documents, setDocuments] = useState<[{name: String | undefined, pages:String | undefined, url: String | undefined, document_id: number}]>();
  useEffect(() => {
    const client = new ApolloClient({
      uri: `${BACKEND_URL}/graphql`,
      cache: new InMemoryCache(),
      credentials: "include",
    });
    async function getDocuments() {
      try {
        const data = await client.query({
          query: gql`
            query RetrieveDocuments {
              RetrieveDocuments {
                pages
                document_id
                name
                url
              }
            }
          `,
        });
        console.log(data.data.RetrieveDocuments);
        setDocuments(data.data.RetrieveDocuments);;
        return data;
      } catch (e) { 
        console.log("Error" + e);
      }
    }
    getDocuments();
  },[]);


  const DocumentsJSX = documents && documents.map(document => <Link href={`/documents/reportgen/${document.document_id}`}><button>{document.name}</button></Link>) || <div>You don't have any documents yet</div>

  return (
    <div className="text-white h-screen w-screen text-lg  bg-[#00162B] font-extrabold">
      <div className="flex h-max items-center justify-around">
        <Logo2 />
        <Navbar />
      </div>
      {DocumentsJSX}
    </div>
  );
}
