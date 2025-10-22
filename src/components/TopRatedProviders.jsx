import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const TopRatedProviders = ({ courses }) => {
  const topRated = courses.filter((course) => course.rating >= 4.7);

  if (topRated.length === 0)
    return (
      <div className="text-center py-10 text-base-content/70">
        No top-rated providers found.
      </div>
    );

  return (
    <div className="bg-base-200 min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Top Rated Providers</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topRated.map((course) => (
          <div
            key={course.skillId}
            className="card bg-base-100 shadow-lg border border-base-300 hover:shadow-xl transition-all duration-300"
          >
            <figure>
              <img
                src={course.image}
                alt={course.skillName}
                className="h-48 w-full object-cover rounded-t-lg"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-lg font-bold">{course.skillName}</h3>
              <p className="text-sm text-base-content/70">{course.category}</p>

              <div className="flex items-center my-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.round(course.rating)
                        ? "text-yellow-400"
                        : "text-base-content/30"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-base-content/70">
                  {course.rating} / 5
                </span>
              </div>

              <p className="text-base-content/80 mb-2">{course.description}</p>

              <p>
                <span className="font-semibold">Instructor:</span>{" "}
                {course.providerName}
              </p>
              <p>
                <span className="font-semibold">Contact:</span>{" "}
                <a
                  href={`mailto:${course.providerEmail}`}
                  className="text-primary hover:underline"
                >
                  {course.providerEmail}
                </a>
              </p>

              <p>
                <span className="font-semibold">Price:</span> ${course.price}
              </p>
            <Link to={`/details/${course.skillId}`} className="btn" course={course}>View details</Link>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default TopRatedProviders;
