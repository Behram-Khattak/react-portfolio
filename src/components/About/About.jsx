import PropTypes from "prop-types";
import videoMyself from "../../assets/videos/VID_169400413_095124_465.mp4";

function About({ pageTitle }) {
  return (
    <>
      <section className="" id="about">
        <div className="max-w-screen-xl min-h-screen p-4 mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-gray-700 underline uppercase underline-offset-8 decoration-wavy decoration-greenish">
            {pageTitle}
          </h2>

          <div className="mt-6 text-center">
            {/* about history */}
            <div className="about_content">
              <p className="mt-6 text-xl leading-10 text-gray-700 first-line:text-3xl">
                <span className="leading-loose underline decoration-wavy text-greenish underline-offset-8">
                  I'm a Nepali girl !
                </span>{" "}
                A passionate Frontend Developer from the beautiful
                country of Nepal. <br /> With a love for crafting sleek, intuitive user
                interfaces, I specialize in building responsive, dynamic
                websites and applications using React. My goal is to bring
                creative visions to life through clean, efficient code, ensuring
                seamless experiences for users across all devices. When I’m not
                immersed in coding, you’ll find me with a camera in hand,
                exploring the breathtaking landscapes of Nepal and beyond. I’ve
                always had a deep love for photography, capturing the world from
                unique perspectives—whether it’s a sunrise over the Himalayas or
                the bustling streets of Kathmandu. As a traveler, I believe that
                every new place has a story waiting to be told. Through my
                journeys, I’ve discovered that travel fuels my creativity,
                helping me approach both life and development with a fresh
                perspective. Each destination I visit inspires new ideas for my
                projects and gives me a deeper understanding of how design can
                impact different cultures and audiences.
                <span className="py-4 font-bold underline uppercase underline-offset-8 decoration-greenish decoration-wavy">
                  A Blend of Tech & Creativity
                </span>
                My experience as a Frontend Developer has allowed me to merge my
                love for technology with my passion for design and storytelling.
                I love using React to build modern web applications that not
                only function flawlessly but also look visually stunning. I’m a
                strong advocate for clean code and user-centered design,
                ensuring that the websites and apps I create are as enjoyable to
                use as they are beautiful to look at. In my photography, I aim
                to tell stories—capturing moments, people, and places in their
                natural essence. From remote mountain villages to vibrant urban
                centers, I love documenting the diversity and beauty of our
                world.
              </p>
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
