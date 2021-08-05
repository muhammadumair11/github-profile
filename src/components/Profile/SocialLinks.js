import { IconContext } from "react-icons";
import { ImLocation, ImTwitter, ImLink } from "react-icons/im";
import { useContext } from "react";
import { ProfileContext } from "../../App";
import "../../scss/social-links.scss";
const SocialLinks = () => {
  const data = useContext(ProfileContext);

  return (
    <div className="social-links">
      <div>
        <IconContext.Provider value={{ size: "1.5rem" }}>
          <ImLocation />
        </IconContext.Provider>
        <div className="location">
          {data.location === "" ? "Not available" : data.location}
        </div>
      </div>

      <div>
        <IconContext.Provider value={{ size: "1.5rem" }}>
          <ImTwitter />
        </IconContext.Provider>
        <div className="twitter">
          {/* ES6 Condition to check if the value is empty, in case of empty just normal text "Not available" is rendered */}
          {data.twitter_username !== "" ? (
            <a
              target="_blank"
              href={`https://twitter.com/${data.twitter_username}`}
              rel="noreferrer"
            >
              {data.twitter_username}
            </a>
          ) : (
            "Not available "
          )}
        </div>
      </div>

      <div>
        <IconContext.Provider value={{ size: "1.5rem" }}>
          <ImLink />
        </IconContext.Provider>
        <div className="blog">
          {/* ES6 Condition to check if the value is empty, in case of empty just normal text "Not available" is rendered */}
          {data.blog !== "" ? (
            <a target="_blank" href={`${data.blog}`} rel="noreferrer">
              {data.blog}
            </a>
          ) : (
            "Not available "
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
