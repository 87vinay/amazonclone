import React from "react";

const LoadingLine = ({loading}) => {
    return (
        loading && (
          <div  className="fixed top-[72px] left-0 w-full bg-[#facc15] h-1 z-50">
            <div className="animate-moving-line h-full bg-slate-200"></div>
          </div>
        )
      );
};

export default LoadingLine;
