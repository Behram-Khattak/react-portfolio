import PropTypes from "prop-types";
import videoMyself from "../../assets/videos/VID_169400413_095124_465.mp4";

function About({ pageTitle }) {
  return (
    <>
      <section className="bg-white" id="about">
        <div className="max-w-screen-xl min-h-screen p-4 mx-auto mb-20">
          <h2 className="text-4xl font-extrabold text-center underline uppercase decoration-wavy text-greenish">
            {pageTitle}
          </h2>

          <div className="grid gap-6 mt-6 text-center lg:text-justify lg:grid-cols-2 place-items-center">
            {/* about history */}
            <div className="about_content">
              <p className="mt-6 text-2xl leading-10 text-greenish first-line:text-4xl">
                <span className="leading-loose underline decoration-wavy underline-offset-8">
                  I'm a Nepali girl
                </span>{" "}
                ! <br />
                with an insatiable wanderlust and a camera that never leaves my
                side. Born and raised amidst the breathtaking Himalayas, I've
                always been drawn to the mountains' majestic beauty and the
                thrill of adventure. Whether I'm trekking through lush forests,
                scaling towering peaks, or capturing stunning landscapes, I find
                solace and inspiration in the great outdoors. My passion lies in
                exploring the hidden gems of my homeland and sharing its natural
                wonders with the world. Join me on my journey as I discover new
                horizons and capture unforgettable moments.
              </p>
            </div>

            {/* travel video */}
            <div className="relative inline-block intro before:block before:absolute before:rounded-full before:rounded-br-none before:-inset-1 before:bg-gradient-to-r before:from-green-500 before:to-greenish">
              <div className="relative p-2 lg:max-w-sm -bottom-4 -left-4 bg-seaSalt">
                <video
                  className="object-cover w-full h-[700px] rounded-full rounded-br-none shadow-xl"
                  muted
                  autoPlay
                  loop
                >
                  <source src={videoMyself} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

About.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default About;
