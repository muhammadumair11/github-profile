import SocialLinks from "./SocialLinks";
import { useContext } from "react";
import { ProfileContext } from "../../App";

const Info = () => {
  const data = useContext(ProfileContext);
  return (
    <div>
      <div className="bio">{data.bio}</div>
      <SocialLinks />
    </div>
  );
};

export default Info;
