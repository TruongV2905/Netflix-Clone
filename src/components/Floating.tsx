import React, { useState, useEffect } from "react";

function Floating() {
  const [show, setShow] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(20);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= (window.innerHeight * 50) / 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`w-full sticky left-0 bottom-0 h-[15vh] flex justify-center items-center z-100 ${
        !show && "pointer-events-none"
      }`}
    >
      <button
        className={`bg-[#c11119] h-[50px] text-white text-xl absolute px-15 rounded-4xl font-semibold cursor-pointer hover:bg-red-800 z-101 transition-all duration-500
                ${show ? " translate-y-0" : " translate-y-50"}`}
      >
        Tham gia ngay
      </button>
      <div
        className={`absolute inset-0 h-full  bg-[linear-gradient(180deg,rgba(4,21,45,0)_0%,rgba(15,15,15,1)_79.17%)] 
        transition-all duration-700
        ${show ? " translate-y-0" : "translate-y-50"}
      `}
      ></div>
    </section>
  );
}

export default Floating;
