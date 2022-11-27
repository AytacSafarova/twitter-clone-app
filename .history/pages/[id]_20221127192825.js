import {
    collection,
    doc,
    onSnapshot,
    orderBy,
    query,
  } from "@firebase/firestore";
  import { modalState } from "../components/atoms/modalAtom";
  import { getProviders, getSession, useSession } from "next-auth/react";
  import { useRouter } from "next/router";
  import { useEffect, useState } from "react";
  import { useRecoilState } from "recoil";
  import Modal from "../components/Modal";
  import Sidebar from "../components/Sidebar";
//   import Widgets from "../components/Widgets";
  import Post from "../components/posts";
  import { db } from "../firebase";
  import { ArrowLeftIcon } from "@heroicons/react/solid";
  import Comment from "../components/comments";
  import Head from "next/head";
  import {Login} from "../components/login"
  function MainPage({ trendingResults, followResults, providers }) {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useRecoilState(modalState);
    const [post, setPost] = useState();
    const [comments, setComments] = useState([]);
    const router = useRouter();
    const { id } = router.query;
  
    useEffect(
      () =>
        onSnapshot(doc(db, "posts", id), (snapshot) => {
          setPost(snapshot.data());
        }),
      [db]
    );
  
    useEffect(
      () =>
        onSnapshot(
          query(
            collection(db, "posts", id, "comments"),
            orderBy("timestamp", "desc")
          ),
          (snapshot) => setComments(snapshot.docs)
        ),
      [db, id]
    );
  
    if (!session) return <Login providers={providers} />;
  
    return (
      <div>
        <Head>
          <title>
            {post?.username} on Twitter: `{post?.text}`
          </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
          <Sidebar />
          <div className="flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
            <div className="flex items-center px-1.5 py-2 border-b border-gray-700 text-[#d9d9d9] font-semibold text-xl gap-x-4 sticky top-0 z-50 bg-black">
              <div
                className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0"
                onClick={() => router.push("/")}
              >
                <ArrowLeftIcon className="h-5 text-white" />
              </div>
              Tweet
            </div>
  
            <Post id={id} post={post} postPage />
            {comments.length > 0 && (
              <div className="pb-72">
                {comments.map((comment) => (
                  <Comment
                    key={comment.id}
                    id={comment.id}
                    comment={comment.data()}
                  />
                ))}
              </div>
            )}
          </div>
          {/* <Widgets
            trendingResults={trendingResults}
            followResults={followResults}
          />
   */}
          {isOpen && <Modal />}
        </main>
      </div>
    );
  }
  
  export default MainPage;
  
  export async function getServerSideProps(context) {
    const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
      (res) => res.json()
    );
    console.log('trend', trendingResults);
    const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
      (res) => res.json()
    );

    const providers = await getProviders();
    const session = await getSession(context);
  
    return {
      props: {
        // trendingResults,
        // followResults,
        providers,
        session,
      },
    };
  }