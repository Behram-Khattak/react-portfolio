import PropTypes from "prop-types";
import TravelGirlImg1 from "../../assets/images/sujata-pic-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hero({ title }) {
  return (
    <>
      <section className="" id="home">
        <div className="max-w-screen-xl min-h-screen p-4 mx-auto mb-20">
          <div className="grid mt-10 space-y-20 text-center lg:text-justify lg:mt-0 lg:grid-cols-2 place-items-center">
            {/* introduction */}
            <div className="space-y-6 leading-loose text-gray-700 capitalize intro">
              <h2 className="text-4xl font-extrabold text-whitish">Hi !</h2>
              <div className="flex gap-4">
                <h1 className="text-4xl font-extrabold">I'm</h1>
                <h1 className="text-6xl font-extrabold text-greenish">
                  {title}
                </h1>
              </div>
              <h2 className="text-3xl leading-loose underline text-whitish underline-offset-8 decoration-wavy">
                a Tech Enthusiast{" "}
                <FontAwesomeIcon icon="computer" size="xl" className="px-4" />{" "}
                <br></br>a traveler{" "}
                <FontAwesomeIcon icon="road" size="xl" className="px-4" />{" "}
                <br></br> and a photographer{" "}
                <FontAwesomeIcon icon="camera" size="xl" className="px-4" />
              </h2>
              <div>
                <a
                  href="https://www.instagram.com/suj_ataa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 text-gray-700 border border-greenish hover:bg-gradient-to-r hover:from-green-500 hover:to-greenish hover:text-white"
                >
                  Follow me on Instagram
                  <span className="ml-2">
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                  </span>
                </a>
              </div>
            </div>
            {/* avatar */}
            <div className="relative inline-block intro before:block before:absolute before:-inset-1 before:bg-gradient-to-r before:from-green-500 before:to-greenish">
              <div className="relative p-2 lg:max-w-sm -bottom-5 -left-5 bg-seaSalt">
                <img
                  className="object-cover w-full h-[600px] shadow-xl"
                  src={TravelGirlImg1}
                  alt="avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Hero;
