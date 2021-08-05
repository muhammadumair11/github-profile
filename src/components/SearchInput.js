import PropTypes from "prop-types";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../scss/SearchInput.scss";

const SearchInput = (props) => {
  const { user } = useParams();
  const defaultInput = user === undefined ? "muhammadumair11" : user;
  const [btn, setBtn] = useState(true);
  const [input, setInput] = useState(defaultInput);

  function handleClick() {
    props.searchClick(btn, input);
    setBtn(btn ? false : true);
  }

  return (
    <div className="searchinput">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter Your Github Username"
      />

      <button onClick={handleClick} className="btn">
        Submit
      </button>
    </div>
  );
};

SearchInput.propTypes = {
  searchClick: PropTypes.any,
};

export default SearchInput;
