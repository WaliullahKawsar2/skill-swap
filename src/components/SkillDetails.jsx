import { useParams, Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import Loader from "./Loader";
import { AuthContext } from "./AuthContext";

const SkillDetails = () => {
  const { courses } = useContext(UserContext);
  const { id } = useParams(); 
  const course = courses.find((skill) => skill.skillId === parseInt(id));

   
  if (!course)
    return (
      <div className="min-h-screen flex items-center justify-center text-base-content">
        Skill not found
      </div>
    );

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center py-10 px-4">
      <div className="max-w-4xl w-full bg-base-300 text-base-content rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={course?.image}
            alt={course?.skillName}
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Right: Content */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-primary">{course?.skillName}</h1>
            <p className="text-base-content/70 mb-4 italic">
              Category: <span className="text-primary-focus">{course?.category}</span>
            </p>

            <div className="flex items-center mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.round(course?.rating) ? "text-yellow-400" : "text-base-content/50"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-base-content/70">{course?.rating} / 5</span>
            </div>

            <p className="text-base-content/80 mb-6">{course?.description}</p>

            <div className="space-y-2 text-base-content">
              <p>
                <span className="font-semibold">Instructor:</span> {course?.providerName}
              </p>
              <p>
                <span className="font-semibold">Contact:</span>{" "}
                <a
                  href={`mailto:${course?.providerEmail}`}
                  className="text-primary hover:underline"
                >
                  {course?.providerEmail}
                </a>
              </p>
              <p>
                <span className="font-semibold">Slots:</span>{" "}
                {course?.slotsAvailable > 0 ? (
                  <span className="text-success">{course?.slotsAvailable} available</span>
                ) : (
                  <span className="text-error">Full</span>
                )}
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">${course?.price}</span>
            <Link
  to="/book"
  state={{ course }}
  className="bg-primary hover:bg-primary-focus px-5 py-2 rounded-lg text-primary-content font-semibold transition-all"
>
  Book Now
</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;
