import React from "react";
import Head from "next/head";
import Sidebar from "../components/sidebar";
import Modal from "../components/modal";
import { useSession } from "next-auth/react";
userec
function MainPage() {
    const { data: session } = useSession()
    const[isOpen,setIsOpen ]=useRecoilState(modalState)
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto ">
        <Sidebar />

    
        {isOpen && <Modal />}
      </main>
    </div>
  );
}

export default MainPage;
