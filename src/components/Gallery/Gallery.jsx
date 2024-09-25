import PropTypes from "prop-types";
import videoOne from "../../assets/videos/UD_suj_ataa_3342204354239513001_8288831145_14_09_2024.mp4";
import videoTwo from "../../assets/videos/VID_169390610_180709_386.mp4";
import videoThree from "../../assets/videos/sujataa_another.mp4";
import imageTwo from "../../assets/images/sujata-pic-2.jpg";
import imageThree from "../../assets/images/sujata-pic-3.jpg";
import imageFour from "../../assets/images/sujata-pic-4.jpg";
import imageFive from "../../assets/images/sujata-pic-5.jpg";
import imageSix from "../../assets/images/sujataa-pic-6.jpg";
import imageSeven from "../../assets/images/sujataa-pic-7.jpg";


function Gallery({ pageTitle }) {
  return (
    <>
      <section id="gallery">
        <div className="max-w-screen-xl min-h-screen p-4 mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-gray-700 underline uppercase decoration-wavy decoration-greenish underline-offset-8">
            {pageTitle}
          </h2>
          <div className="grid max-w-screen-xl grid-cols-1 gap-4 px-4 mx-auto mt-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="grid gap-4">
              <div>
                <video
                  className="object-cover w-full h-[700px] rounded-lg shadow-xl"
                  muted
                  autoPlay
                  loop
                >
                  <source src={videoOne} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={imageTwo}
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={imageThree}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={imageFour}
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={imageFive}
                  alt=""
                />
              </div>
              <div>
              <video
                  className="object-cover w-full h-[700px] rounded-lg shadow-xl"
                  muted
                  autoPlay
                  loop
                >
                  <source src={videoThree} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={imageSix}
                  alt=""
                />
              </div>
              <div>
              <video
                  className="object-cover w-full h-[700px] rounded-lg shadow-xl"
                  muted
                  autoPlay
                  loop
                >
                  <source src={videoTwo} type="video/mp4" />
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

Gallery.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default Gallery;
