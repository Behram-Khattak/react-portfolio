import PropTypes from "prop-types";

function ListItem({ text, link }) {
  return (
    <>
      <li>
        <a
          href={link}
          className="block px-3 py-2 text-gray-700 rounded md:hover:bg-transparent md:border-0 hover:underline hover:decoration-greenish hover:decoration-wavy hover:underline-offset-6 md:p-0"
        >
          {text}
        </a>
      </li>
    </>
  );
}

ListItem.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  };

export default ListItem;
