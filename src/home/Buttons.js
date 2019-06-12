import React from "react";
import Button from "../components/compButtons.js";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

function Buttons({ topic, onSelect }) {
  return (
    <Link to={`/news/${topic.id}`} onClick={() => onSelect(topic.id)}>
      <Button buttonIcon={topic.img} />
    </Link>
  );
}
export default withRouter(Buttons);

// ------- proptypes --------
Buttons.propTypes = {
  topic: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.string])
  ),
  onSelect: PropTypes.func
};
