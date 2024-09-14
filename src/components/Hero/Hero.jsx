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
            <div className="space-y-6 capitalize intro text-greenish">
              <h2 className="text-4xl font-extrabold text-whitish">Hi... !</h2>
              <h1 className="text-6xl font-extrabold text-whitish">{title}</h1>
              <h2 className="text-3xl leading-loose underline text-whitish underline-offset-8 decoration-wavy">
                a traveler{" "}
                <FontAwesomeIcon icon="road" size="xl" className="px-4" />{" "}
                <br></br> and a photographer{" "}
                <FontAwesomeIcon icon="camera" size="xl" className="px-4" />
              </h2>
              <div>
                <a
                  href="https://www.instagram.com/suj_ataa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 border border-greenish text-greenish hover:bg-greenish hover:text-white"
                >
                  Follow me on Instagram
                  <span className="ml-2">
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                  </span>
                </a>
              </div>
            </div>
            {/* avatar */}
            <div className="relative inline-block intro before:block before:absolute before:rounded-full before:rounded-br-none before:-inset-1 before:bg-gradient-to-r before:from-green-500 before:to-greenish">
              <div className="relative p-2 lg:max-w-sm -bottom-4 -left-4 bg-seaSalt">
                <img
                  className="object-cover w-full h-[700px] rounded-full rounded-br-none shadow-xl"
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
