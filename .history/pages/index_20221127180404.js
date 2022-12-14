import Head from "next/head";
import Sidebar from "../components/sidebar";
import Feed from "../components/feed";
import Login from "../components/login";
import Modal from "../components/modal";
import Aside from "../components/aside";
import { getProviders, getSession, useSession } from "next-auth/react";
import { useState } from "react";
import { modalState } from "../components/atoms/modalAtom";
import { useRecoilState } from "recoil";

export default function Home({trendingResults, followResults, providers}) {
  const { data: session } = useSession()
  const[isOpen,setIsOpen ]=useRecoilState(modalState)
if(!session) return <Login providers={providers}/>
console.log(session);
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto ">
        <Sidebar />
        <Feed/>
        {
          isOpen &&      <Modal/>
        }
        <Aside trendingResults={}/>
        
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
    (res) => res.json()
  );

  // console.log(trendingResults);
  const providers = await getProviders();
  const session = await getSession(context);
console.log(session);
  return {
    props: {
      trendingResults,
      // followResults,
      providers,
      session,
    },
  };
}