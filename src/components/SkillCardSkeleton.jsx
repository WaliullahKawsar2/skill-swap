import React from "react";

const SkillCardSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-lg animate-pulse ">
      <figure className="h-48 w-full bg-base-300"></figure>

      <div className="card-body space-y-3">
        <div className="h-5 bg-base-300 rounded w-3/4"></div>
        <div className="h-4 bg-base-300 rounded w-1/2"></div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-base-300 rounded-full"></div>
          <div className="h-4 bg-base-300 rounded w-16"></div>
        </div>

        <div className="h-3 bg-base-300 rounded w-full"></div>
        <div className="h-3 bg-base-300 rounded w-5/6"></div>

        <div className="flex justify-between mt-3">
          <div className="h-5 bg-base-300 rounded w-20"></div>
          <div className="h-5 bg-base-300 rounded w-16"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillCardSkeleton;
