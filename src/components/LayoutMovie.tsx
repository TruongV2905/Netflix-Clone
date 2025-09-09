import React from "react";
import { BsAlignTop } from "react-icons/bs";

function LayoutMovie() {
  return (
    <>
      <div className="relative bg-[url('https://assets.nflxext.com/ffe/siteui/acquisition/lodp/NMHP_LINK.png')] bg-cover bg-center max-w-[1250px] mx-auto h-[100px] rounded-xl overflow-hidden flex justify-between items-center gap-10 px-[30px] mb-[60px] ">
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="text-center text-white text-xl font-[600] z-2">
          Khám phá những tác phẩm yêu thích tiếp theo của bạn, cùng nội dung mới
          phát hành hàng tuần
        </h1>
        <button className="px-2 py-2 bg-[rgba(0,0,0,0.2)] text-white font-[600] cursor-pointer z-2 rounded-4xl border border-white/30 hover:bg-[rgba(0,0,0,0.4)] transition duration-300">
          Tìm hiểu về Netflix
        </button>
      </div>

      <div className="max-w-[1250px] mx-auto p-7 rounded-xl bg-[rgba(255,255,255,0.1)] backdrop-blur-xl text-[rgb(128,128,128)] text-sm">
        <BsAlignTop className="inline-block text-[18px] mr-1" />
        Đọc tin tức về các series và phim của Netflix cũng như xem các video bên
        lề trên
        <a
          href="https://tudum.com"
          className="underline ml-2 hover:text-gray-300"
        >
          Tudum.com
        </a>
        .
      </div>
    </>
  );
}

export default LayoutMovie;
