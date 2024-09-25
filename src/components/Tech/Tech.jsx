import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Tech({ pageTitle }) {
  return (
    <>
      <section className="" id="tech">
        <div className="max-w-screen-xl min-h-screen p-4 mx-auto mb-20">
          <h2 className="text-4xl font-extrabold text-center text-gray-700 underline uppercase decoration-wavy decoration-greenish underline-offset-8">
            {pageTitle}
          </h2>

          <div className="mt-14 coding-skills">
            <div className="title">
              <h2 className="text-2xl font-extrabold text-gray-700 underline uppercase decoration-wavy decoration-greenish underline-offset-8">
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
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div className="bg-orange-500 h-2.5 rounded-full"></div>
              </div>
              <div className="mb-1 text-base font-bold text-blue-700">
                CSS 3
                <FontAwesomeIcon
                  icon={["fab", "css3-alt"]}
                  size="2xl"
                  className="px-2"
                />
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div className="bg-blue-600 h-2.5 rounded-full"></div>
              </div>
              <div className="mb-1 text-base font-bold text-yellow-400">
                Javascript
                <FontAwesomeIcon
                  icon={["fab", "java"]}
                  size="2xl"
                  className="px-2"
                />
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div className="bg-yellow-400 h-2.5 rounded-full"></div>
              </div>
              <div className="mb-1 text-base font-bold text-blue-400">
                React Js
                <FontAwesomeIcon
                  icon={["fab", "react"]}
                  size="2xl"
                  className="px-2"
                />
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div className="bg-blue-400 h-2.5 rounded-full w-[90%]"></div>
              </div>
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
