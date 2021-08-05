import PropTypes from "prop-types";
import List from "./Follow/List";
import BottomBtns from "./BottomBtns";

const FollowList = (props) => {
  return (
    <div className="follower">
      <List title={props.following === "true" ? "Following" : "Followers"} />
      <BottomBtns />
    </div>
  );
};

FollowList.propTypes = {
  following: PropTypes.any,
};

export default FollowList;
