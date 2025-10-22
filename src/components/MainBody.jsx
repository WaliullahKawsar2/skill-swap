import React, { useContext } from "react";
import Hero from "./Hero";
import PopularSkill from "./PopularSkill";
import { Link } from "react-router";
import TopRatedProviders from "./TopRatedProviders";
import { UserContext } from "./UserContext";

const MainBody = () => {
  const { courses } = useContext(UserContext)
  return (
    <div>
      <Hero></Hero>
      <TopRatedProviders courses={courses} />
      <PopularSkill></PopularSkill>
      <Link
        to="/courses"
        className="btn btn-outline btn-primary flex items-center gap-2 max-w-35 mx-auto my-7"
      >
        <span>View More</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </Link>
      
    </div>
  );
};

export default MainBody;
