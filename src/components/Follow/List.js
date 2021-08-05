import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FollowProfile from "./FollowProfile";
import "../../scss/list.scss";
import { useContext } from "react";
import { FollowerContext, FollowingContext, ProfileContext } from "../../App";
import ProfileName from "../ProfileName";

const List = ({ title }) => {
  const apiData =
    title === "Followers"
      ? useContext(FollowerContext)
      : useContext(FollowingContext);
  const profileData = useContext(ProfileContext);

  return (
    <div className="followercard">
      <ProfileName />
      <div className="followerhead">
        <h1>{title}</h1>
        <Link to={`/${profileData.login}`} className="btn link-styles">
          Back
        </Link>
      </div>
      <div className="List">
        {apiData.map((element) => (
          <FollowProfile
            key={element.id}
            url={element.avatar_url}
            name={element.login}
          />
        ))}
      </div>
    </div>
  );
};

List.propTypes = {
  list: PropTypes.any,
  title: PropTypes.any,
  user: PropTypes.any,
};

export default List;
