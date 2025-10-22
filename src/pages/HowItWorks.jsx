import React from "react";
import { FaRegHandPointer, FaChalkboardTeacher, FaCalendarCheck } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaRegHandPointer className="text-4xl text-primary mb-4" />,
      title: "Browse Skills",
      description:
        "Explore our diverse skill listings. Check ratings, descriptions, prices, and availability of sessions.",
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-primary mb-4" />,
      title: "Select a Skill",
      description:
        "Click on 'View Details' to see full information about the skill and the instructor.",
    },
    {
      icon: <FaCalendarCheck className="text-4xl text-primary mb-4" />,
      title: "Book a Session",
      description:
        "Fill in your name and email to book a session. Get a confirmation instantly!",
    },
  ];

  return (
    <section className="bg-base-200 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">How It Works</h2>
        <p className="text-base-content/70 mb-12">
          Follow these simple steps to start learning new skills with SkillSwap
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-base-100 shadow-lg rounded-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              {step.icon}
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-base-content/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
