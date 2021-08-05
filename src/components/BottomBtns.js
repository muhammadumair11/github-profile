import { ProfileContext } from "../App";
import { useContext } from "react";

const BottomBtns = () => {
  const data = useContext(ProfileContext);

  return (
    <div className="btns">
      <a
        target="_blank"
        href={`${data.html_url}?tab=repositories`}
        className="btn"
        rel="noreferrer"
      >
        Repositories
      </a>
      <a target="_blank" href={data.html_url} className="btn" rel="noreferrer">
        Visit Profile on Github
      </a>
    </div>
  );
};

export default BottomBtns;
