import React from 'react'
import Head from 'next/head'
import Feed from '../components/feed'
import Sidebar from '../components/sidebar'
import Modal from '../components/modal'

function MainPage() {
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto ">
                <Sidebar/>
                
        <Feed/>
        {
          isOpen &&      <Modal/>
        }
  
      </main>
    </div>
  )
}

export default MainPage