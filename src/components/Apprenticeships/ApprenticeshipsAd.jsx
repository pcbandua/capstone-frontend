import React, { useState, useEffect } from "react";

const ApprenticeshipsAd = () => {
  const options = [
    "Build Skills",
    "Build Confidence",
    "Build Purpose",
    "Build Community",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % options.length);
    }, 2000); // Rotates every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 rounded-lg">
      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1581092786450-7ef25f140997?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcHJlbnRpY2V8ZW58MHx8MHx8fDA%3D"
        alt=""
        className="absolute inset-0 -z-10 w-full h-full object-cover object-right md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#98ff53] to-[#15e0ff] opacity-65"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#fa5483] to-[#f9179b] opacity-45"
        />
      </div>

      {/* Wording */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            {options[index]} x Get Paid
          </h1>
          <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl">
            Explore paid apprenticeships designed to match you with
            opportunities that value skills over resumes. Start building your
            future today, one skill at a time.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col-reverse gap-1">
              <dt className="text-base text-gray-300">
                US Apprenticeships Placement Rate
              </dt>
              <dd className="text-4xl font-semibold tracking-tight text-white">
                95%
              </dd>
            </div>
            <div className="flex flex-col-reverse gap-1">
              <dt className="text-base text-gray-300">Completion Rate</dt>
              <dd className="text-4xl font-semibold tracking-tight text-white">
                84%
              </dd>
            </div>
            <div className="flex flex-col-reverse gap-1">
              <dt className="text-base text-gray-300">
                Skill Development in Aligned Roles
              </dt>
              <dd className="text-4xl font-semibold tracking-tight text-white">
                90%
              </dd>
            </div>
            <div className="flex flex-col-reverse gap-1">
              <dt className="text-base text-gray-300">
                Average Earnings Increase
              </dt>
              <dd className="text-4xl font-semibold tracking-tight text-white">
                43%
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ApprenticeshipsAd;
