import WrapperName from "./WrapperName";
import { Link } from "react-router-dom";
import "../scss/ProfileName.scss";
import { useContext } from "react";
import { ProfileContext } from "../App";

const ProfileName = () => {
  const data = useContext(ProfileContext);

  return (
    <WrapperName className="profilename">
      <img src={data.avatar_url} alt={data.name} />
      <div className="name">
        <h1>{data.name}</h1>
        <div>
          <Link to={`/${data.login}/followers`} className="follow-info">
            Followers {data.followers}
          </Link>
          <Link to={`/${data.login}/following`} className="follow-info">
            Following {data.following}
          </Link>
        </div>
      </div>
    </WrapperName>
  );
};
export default ProfileName;
