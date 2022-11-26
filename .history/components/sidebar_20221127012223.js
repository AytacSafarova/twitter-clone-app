import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import SidebarLink from "./sidebarLink";
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  const { data: session } = useSession()

  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <img src="https://rb.gy/ogau5a" width={30} height={30} />
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]">
        Tweet
      </button>
      <div className="text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation xl:ml-auto xl:-mr-5">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">firebase 1875</h4>
          <p className="text-[#6e767d]">firebase 1875</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
}

export default Sidebar;




// import React from "react";
// import { useSession } from "next-auth/react";
// import Image from "next/image";
// import SidebarLink from "./sidebarLink";
// import { HomeIcon } from "@heroicons/react/solid";
// import {
//   HashtagIcon,
//   BellIcon,
//   InboxIcon,
//   BookmarkIcon,
//   ClipboardListIcon,
//   UserIcon,
//   DotsCircleHorizontalIcon,
//   DotsHorizontalIcon,
// } from "@heroicons/react/outline";

// function Sidebar() {
//   const { data: session } = useSession()

//   return (
//     <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
//       <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
//         <img src={session.user.image}
//         width={30} height={30} />
//       </div>
//       <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
//         <SidebarLink text="Home" Icon={HomeIcon} active />
//         <SidebarLink text="Explore" Icon={HashtagIcon} />
//         <SidebarLink text="Notifications" Icon={BellIcon} />
//         <SidebarLink text="Messages" Icon={InboxIcon} />
//         <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
//         <SidebarLink text="Lists" Icon={ClipboardListIcon} />
//         <SidebarLink text="Profile" Icon={UserIcon} />
//         <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
//       </div>
//       <button className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]">
//         Tweet
//       </button>
//       <div className="text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation xl:ml-auto xl:-mr-5">
//         <img
//        src={session.user.image}
//           alt=""
//           className="h-10 w-10 rounded-full xl:mr-2.5"
//         />
//         <div className="hidden xl:inline leading-5">
//           <h4 className="font-bold">{session.user.name}</h4>
//           <p className="text-[#6e767d]">{session.user?.tag}</p>
//         </div>
//         <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
