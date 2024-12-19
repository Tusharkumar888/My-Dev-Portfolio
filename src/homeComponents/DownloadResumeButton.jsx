import React from "react";

export const DownloadResumeButton = () => {
  return (
    <div className="bg-indigo-400 duration-150 hover:!border-b-2 mx-2 text-white rounded-xl drop-shadow-lg group flex flex-col items-center justify-center border-2 border-b-[6px] border-blue-950 cursor-pointer active:bg-indigo-500 overflow-hidden w-[84%] h-12 mb-4">
      <a
        href="../../public/Tushar-Kumar cv.pdf" // Path to your resume file in the public folder
        download="Tushar-Kumar cv.pdf" // The name of the downloaded file
      >
        <button className="">
          Download Resume
        </button>
      </a>
    </div>
  );
};


