import React from 'react'

function Posts() {
  return (
    <div
    className="p-3 flex cursor-pointer border-b border-gray-700"
    onClick={() => router.push(`/${id}`)}
  >
    {!postPage && (
      <img
        src={post?.userImg}
        alt=""
        className="h-11 w-11 rounded-full mr-4"
      />
    )}
    <div className="flex flex-col space-y-2 w-full">
      <div className={`flex ${!postPage && "justify-between"}`}>
        {postPage && (
          <img
            src={post?.userImg}
            alt="Profile Pic"
            className="h-11 w-11 rounded-full mr-4"
          />
        )}
        <div className="text-[#6e767d]">
          <div className="inline-block group">
            <h4
              className={`font-bold text-[15px] sm:text-base text-[#d9d9d9] group-hover:underline ${
                !postPage && "inline-block"
              }`}
            >
              {post?.username}
            </h4>
            <span
              className={`text-sm sm:text-[15px] ${!postPage && "ml-1.5"}`}
            >
              @{post?.tag}
            </span>
          </div>
          ·{" "}
          <span className="hover:underline text-sm sm:text-[15px]">
            <Moment fromNow>{post?.timestamp?.toDate()}</Moment>
          </span>
          {!postPage && (
            <p className="text-[#d9d9d9] text-[15px] sm:text-base mt-0.5">
              {post?.text}
            </p>
          )}
    

  

</div>
  </div>
  )
}

export default Posts