import style from "./Button.module.css";
import PropTypes from "prop-types";
const Button = ({ isOutline, icon, text, ...rest }) => {
  return (
    <button
      {...rest}
      className={isOutline ? style.outline_btn : style.primary_btn}
    >
      {icon}
      {text}
    </button>
  );
};
Button.propTypes = {
  isOutline: PropTypes.bool, // 'isOutline' is expected to be a boolean
  icon: PropTypes.node, // 'icon' is expected to be a React node (like a component or element)
  text: PropTypes.string.isRequired, // 'text' is expected to be a string and it's required
};

// You can also set default props if needed
Button.defaultProps = {
  isOutline: false, // Default to false if 'isOutline' is not provided
};

export default Button;
