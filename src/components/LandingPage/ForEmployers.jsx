import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function ForEmployers() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-sky-600">
                Benefits For Employers
              </p>
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Hire Smarter, Not Harder
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
                Our skills-first platform provides diverse, qualified talent and
                eliminates hiring biases, creating a fairer, more effective
                hiring process.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src="/pics/happy-senior-businesswoman-during-meeting-at-robot-2023-11-27-05-08-20-utc.JPG"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/5 text-gray-700 lg:max-w-lg">
              <h1 className="mt-2 text-pretty text-lg font-semibold tracking-tight text-gray-900 sm:text-3xl">
                Access Next Generation Talent
              </h1>
              <p className="mt-4 text-md text-gray-700">
                Enable a future-ready workforce by supporting knowledge transfer
                across generations, building stronger, more inclusive teams.
              </p>

              <h1 className="mt-2 text-pretty text-lg font-semibold tracking-tight text-gray-900 sm:text-3xl">
                Build Long-Term Productivity and Trust:
              </h1>
              <p className="mt-4 text-md text-gray-700">
                Apprentices develop deep trust and familiarity, boosting
                long-term productivity and loyalty.
              </p>

              <h1 className="mt-2 text-pretty text-xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                Improve Company Culture:
              </h1>
              <p className="mt-4 text-md text-gray-700">
                Apprentices who grow within the company enhance workplace
                culture and often mentor others.
              </p>

              <h1 className="mt-2 text-pretty text-xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                Higher Employee Retention:
              </h1>
              <p className="mt-4 text-md text-gray-700">
                Apprentices are more likely to stay long-term, reducing turnover
                and associated costs.
              </p>

              <h1 className="mt-2 text-pretty text-xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                Tailored Skill Development:
              </h1>
              <p className="mt-4 text-md text-gray-700">
                Apprenticeships allow tailored skill development, fostering
                loyalty as apprentices feel aligned with company goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
