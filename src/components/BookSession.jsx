import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const BookSession = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const location = useLocation();
  const course = location.state?.course;
  const navigate = useNavigate();

  if (!course) return <p className="text-center mt-10">No course selected</p>;

  const handleBook = (e) => {
    e.preventDefault();

    const booking = {
      id: Date.now(),
      courseId: course.skillId,
      courseName: course.skillName,
      instructor: course.providerName,
      email,
      name,
      date: new Date().toLocaleString(),
    };
    

    const stored = JSON.parse(localStorage.getItem("bookedSessions")) || [];
    stored.push(booking);
    localStorage.setItem("bookedSessions", JSON.stringify(stored));

    toast.success("Session booked successfully");
    navigate("/bookedSessions")

    setName("");
    setEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 px-6 py-12">
      <h2 className="text-2xl font-bold mb-6">Book a Session</h2>

      <form
        onSubmit={handleBook}
        className="card bg-base-100 shadow-lg p-6 space-y-6 border border-base-300 w-full max-w-md"
      >
        <div>
          <label className="label">
            <span className="label-text font-medium">Your Name</span>
          </label>
          <input
            type="text"
            
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text font-medium">Email Address</span>
          </label>
          <input
            type="email"
            
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Book Session
        </button>
      </form>
    </div>
  );
};

export default BookSession;
