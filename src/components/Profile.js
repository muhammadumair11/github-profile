import PropTypes from "prop-types";
import BottomBtns from "./BottomBtns";
import ProfileData from "./Profile/ProfileData";
import SearchInput from "./SearchInput";

const Profile = (props) => {
  return (
    <div className="profile">
      <SearchInput searchClick={props.profileInputState} />
      <ProfileData />
      <BottomBtns />
    </div>
  );
};
Profile.propTypes = {
  profileInputState: PropTypes.any,
};

export default Profile;
