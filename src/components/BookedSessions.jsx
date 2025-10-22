import { useEffect, useState } from "react";

const BookedSessions = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookedSessions")) || [];
    setSessions(stored);
  }, []);

  if (sessions.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200 text-base-content">
        <p className="text-lg">No sessions booked yet.</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Booked Sessions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sessions.map((s) => (
          <div
            key={s.id}
            className="card bg-base-100 shadow-lg border border-base-300 p-5"
          >
            <h3 className="text-xl font-bold mb-2">{s.courseName}</h3>
            <p>
              <span className="font-semibold">Instructor:</span> {s.instructor}
            </p>
            <p>
              <span className="font-semibold">Booked By:</span> {s.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {s.email}
            </p>
            <p>
              <span className="font-semibold">Date:</span> {s.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookedSessions;
