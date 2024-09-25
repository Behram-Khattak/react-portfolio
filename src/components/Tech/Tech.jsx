import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Tech({ pageTitle }) {
  return (
    <>
      <section className="" id="tech">
        <div className="max-w-screen-xl min-h-screen p-4 mx-auto mb-10">
          <h2 className="text-4xl font-extrabold text-center text-gray-700 underline uppercase decoration-wavy decoration-greenish underline-offset-8">
            {pageTitle}
          </h2>

          {/* coding skills */}
          <div className="max-w-screen-sm mt-14 coding-skills">
            <div className="title">
              <h2 className="text-2xl font-extrabold text-center text-gray-700 underline uppercase sm:text-left decoration-wavy decoration-greenish underline-offset-8">
                Coding Skills
              </h2>
            </div>
            {/*  */}

            <div className="py-8">
              <div className="mb-1 text-base font-bold text-orange-500">
                HTML 5
                <FontAwesomeIcon
                  icon={["fab", "html5"]}
                  size="2xl"
                  className="px-2"
                />
              </div>
              <div className="w-full bg-green-200 rounded-full h-2.5 mb-4">
                <div className="bg-orange-500 h-2.5 rounded-full"></div>
              </div>
              <div className="mb-1 text-base font-bold text-green-700">
                CSS 3
                <FontAwesomeIcon
                  icon={["fab", "css3-alt"]}
                  size="2xl"
                  className="px-2"
                />
              </div>
              <div className="w-full bg-green-200 rounded-full h-2.5 mb-4">
                <div className="bg-green-600 h-2.5 rounded-full"></div>
              </div>
              <div className="mb-1 text-base font-bold text-yellow-400">
                Javascript
                <FontAwesomeIcon
                  icon={["fab", "java"]}
                  size="2xl"
                  className="px-2"
                />
              </div>
              <div className="w-full bg-green-200 rounded-full h-2.5 mb-4">
                <div className="bg-yellow-400 h-2.5 rounded-full"></div>
              </div>
              <div className="mb-1 text-base font-bold text-green-400">
                React Js
                <FontAwesomeIcon
                  icon={["fab", "react"]}
                  size="2xl"
                  className="px-2"
                />
              </div>
              <div className="w-full bg-green-200 rounded-full h-2.5 mb-4">
                <div className="bg-green-400 h-2.5 rounded-full w-[90%]"></div>
              </div>
            </div>
          </div>

          {/* education & experiences */}
          <div className="max-w-screen-sm mt-14 experiences ms-auto">
            <div className="title">
              <h2 className="text-2xl font-extrabold text-center text-gray-700 underline uppercase sm:text-left decoration-wavy decoration-greenish underline-offset-8">
                education & experience
              </h2>
            </div>
            {/*  */}

            <div className="py-8">
              <ol className="relative border-greenish border-s dark:border-gray-700">
                <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 bg-green-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    February 2024
                  </time>
                  <h3 className="text-lg font-semibold text-green-500 dark:text-white">
                    Balkumari College Chitwan TU Affiliated.
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    About to Graduate from the Balkumari College Chitwan TU
                    Affiliated.
                  </p>
                  <a
                    href="https://www.balkumaricollege.edu.np/"
                    target="_blank"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-green-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-green-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    Visit Site{" "}
                  </a>
                </li>
                <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 bg-green-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    March 2023
                  </time>
                  <h3 className="text-lg font-semibold text-green-500 dark:text-white">
                    Aakar Creative Hub
                  </h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    I worked as a Frontend Web Developer and React Developer in
                    Aakar Creative Hub, a small e-commerce website development
                    agency in Chitwan.
                  </p>
                </li>
                <li className="ms-4">
                  <div className="absolute w-3 h-3 bg-green-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    April 2022
                  </time>
                  <h3 className="text-lg font-semibold text-green-500 dark:text-white">
                    E-Commerce UI code in Tailwind CSS
                  </h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Get started with dozens of web components and interactive
                    elements built on top of Tailwind CSS.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Tech.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default Tech;
