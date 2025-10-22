import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import SkillCard from "./SkillCard";
import SkillCardSkeleton from "./SkillCardSkeleton";

const AllCourses = () => {
  const { courses, loading } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");

  
  const filteredCourses = courses.filter((course) =>
    course.skillName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortOption === "priceLowHigh") return a.price - b.price;
    if (sortOption === "priceHighLow") return b.price - a.price;
    if (sortOption === "ratingHighLow") return b.rating - a.rating;
    return 0; 
  });

  return (
    <>
      <div className="text-center my-6">
        <h1 className="text-3xl font-bold mb-6">All Courses</h1>


        <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-11/12 mx-auto">

          <label className="input input-bordered flex items-center gap-2 w-80 bg-base-200 text-base-content outline-none">
            <input
              type="text"
              className="grow"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 opacity-70"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.35-4.35M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"
              />
            </svg>
          </label>


          <select
            className="select select-bordered w-60 bg-base-200 text-base-content outline-none"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Sort by (default)</option>
            <option value="priceLowHigh">Price: Low → High</option>
            <option value="priceHighLow">Price: High → Low</option>
            <option value="ratingHighLow">Rating: High → Low</option>
          </select>
        </div>
      </div>


      <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center p-5 gap-5 transition-colors duration-500">

        {
            loading?Array.from({ length: 8 }).map((_, i) => <SkillCardSkeleton key={i} />) :
        sortedCourses.length > 0 ? (
          sortedCourses.map((course) => (
            <SkillCard key={course.skillId} course={course} />
          ))
        ) : (
          <p className="col-span-full text-center text-base-content opacity-70 mt-10">
            No courses found.
          </p>
        )}
      </div>
    </>
  );
};

export default AllCourses;
