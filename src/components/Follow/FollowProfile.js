import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../scss/FollowProfile.scss";
import WrapperName from "../WrapperName";

const FollowProfile = ({ url, name }) => {
  return (
    <WrapperName className="followname">
      <img src={url} alt={name} />
      <Link to={`/${name}`}>
        <div className="name">
          <h1>{name}</h1>
        </div>
      </Link>
    </WrapperName>
  );
};

FollowProfile.propTypes = {
  url: PropTypes.any,
  name: PropTypes.string,
};

export default FollowProfile;
