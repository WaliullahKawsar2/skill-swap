import React, { useContext } from "react";
import SkillCard from "./SkillCard";
import { UserContext } from "./UserContext";
import SkillCardSkeleton from "./SkillCardSkeleton";


const PopularSkill = () => {
  const { courses, loading } = useContext(UserContext);
  const PopularCourses = courses.slice(0, 8);
  return (
    <>
    <h2 className="ml-6 font-bold text-2xl my-5">Popular Courses</h2>
    <div className="min-h-screen W grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center p-5 gap-5 ">

      {loading?Array.from({ length: 8 }).map((_, i) => <SkillCardSkeleton key={i} />) :
        PopularCourses.map(course=><SkillCard key={course.skillId} course={course}></SkillCard>)
      }
    </div>
    
      </>
  );
};

export default PopularSkill;
