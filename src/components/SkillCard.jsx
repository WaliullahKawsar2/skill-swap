import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const SkillCard = ({ course }) => {
  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition duration-300 container ">
      
      <figure>
        <img
          src={course?.image}
          alt={course?.skillName}
          className="h-48 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">
          {course?.skillName}
        </h2>

        <p className="text-sm opacity-80">
          By <span className="font-medium">{course?.providerName}</span>
        </p>

        <div className="flex items-center text-yellow-500">
          <FaStar className="mr-1" />
          <span className="text-sm text-base-content/80">
            {course?.rating} / 5
          </span>
        </div>

        <p className="text-sm text-base-content/70">
          {course?.description}
        </p>

        <div className="flex justify-between items-center mt-3">
          <span className="font-bold text-primary">
            ${course?.price}/session
          </span>
          <span className="text-sm opacity-70">
            Slots : {course?.slotsAvailable}
          </span>
        </div>

        <div className="card-actions justify-between items-center mt-2">
          <div className="badge badge-outline">{course?.category}
            
          </div>
          <Link to={`/details/${course.skillId}`} className="btn" course={course}>View details</Link>
        </div>
      </div>
    </div>
   );
};

export default SkillCard;
