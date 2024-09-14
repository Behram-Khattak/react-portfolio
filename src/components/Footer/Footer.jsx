import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function Footer({copyRight}) {
    return (
        <>
            <footer className="max-w-screen-xl p-4 mx-auto space-x-6 space-y-4 text-center text-greenish sm:space-y-0">
                <span className="text-sm">
                    &copy; {copyRight} All rights reserved.
                </span>
                <span className="inline-flex space-x-4">
                    {/* <a href="/" className="text-greenish">
                        <FontAwesomeIcon  icon={['fab', 'facebook']} size="2x" />
                    </a>
                    <a href="/" className="text-greenish">
                        <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
                    </a> */}
                    <a href="https://www.instagram.com/suj_ataa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-greenish">
                        <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
                    </a>
                </span>
            </footer>
        </>
    );
}

Footer.propTypes = {
    copyRight: PropTypes.string.isRequired,
  };

export default Footer;