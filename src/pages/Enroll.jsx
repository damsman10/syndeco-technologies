import React from "react";

const Enroll = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-20 font-montserrat">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-10">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#003366] mb-4">
            Enroll in Frontend Bootcamp
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Take the next step towards becoming a frontend developer. Fill the form below to secure your spot.
          </p>
        </div>

        {/* Packages Reminder */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          {/* Fundamentals */}
          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-bold text-[#003366] mb-2">
              Frontend Fundamentals
            </h3>
            <p className="text-gray-600 mb-3">
              HTML, CSS, JavaScript
            </p>
            <p className="text-2xl font-bold">₦80,000</p>
          </div>

          {/* Advanced */}
          <div className="border-2 border-[#003366] rounded-xl p-6">
            <h3 className="text-xl font-bold text-[#003366] mb-2">
              Frontend Advanced
            </h3>
            <p className="text-gray-600 mb-3">
              Includes React.js & Tailwind CSS
            </p>
            <p className="text-2xl font-bold">₦200,000</p>
          </div>

        </div>

        {/* Urgency */}
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-lg mb-10 text-center font-medium">
          ⚠️ Limited slots available. Enrollment is reviewed and accepted based on commitment.
        </div>

        {/* Form */}
        <div className="w-full flex justify-center">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdtFLRDoP3s46gDcyE_K6yM2ajE6g4Ge5cN2nEUbbtglK2dzA/viewform?embedded=true"
            width="100%"
            height="800"
            className="rounded-xl"
            title="Enrollment Form"
          >
            Loading…
          </iframe>
        </div>

        {/* Footer reassurance */}
        <p className="text-center text-gray-600 mt-8 text-sm">
          After submitting, you will be contacted with the next steps.
        </p>

      </div>
    </div>
  );
};

export default Enroll;