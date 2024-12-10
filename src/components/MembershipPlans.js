import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MembershipPlans = () => {
  const plans = [
    {
      name: "Gold Plan",
      price: "₹5000",
      features: [
        "per year",
        "Unlimited profile views",
        "Priority support",
        "10 personalized matches",
        "Advanced search filters",
      ],
      buttonColor: "bg-yellow-500",
    },
    {
      name: "Platinum Plan",
      price: "₹7000",
      features: [
        "Till Marriage",
        "Dedicated relationship manager",
        "50 personalized matches",
        "Top search ranking",
        "Direct contact with matches",
      ],
      buttonColor: "bg-purple-500",
    },
  ];

  return (
    <>
     <div className="mb-10 flex ">
       <div className="absolute">
       <Navbar/>
        </div>
      </div> 
      <div className="bg-gray-100 py-10 mb-16">
        <div className="max-w-7xl mx-auto p-4">
          <h1 className="text-3xl font-bold text-center text-pink-500 mb-20 mt-10">
            Choose Your Membership Plan
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 border-t-4"
                style={{
                  borderTopColor: plan.buttonColor.split(" ")[0], // Matches plan button color
                }}
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  {plan.name}
                </h2>
                <p className="text-4xl font-bold text-gray-900 mb-6">
                  {plan.price}{" "}
                  <span className="text-sm font-medium"></span>
                </p>
                <ul className="text-gray-600 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 text-white font-semibold rounded ${plan.buttonColor} hover:opacity-90`}
                >
                  Get {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MembershipPlans;
