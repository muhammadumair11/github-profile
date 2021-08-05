import Profile from "./components/Profile";
import FollowList from "./components/FollowList";
import React, { useEffect, useState } from "react";
import { ProfileAPI } from "./API/ProfileAPI";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./scss/App.scss";
import { FollowAPI } from "./API/FollowAPI";

//Context Apis Declearation
export const ProfileContext = React.createContext();
export const FollowerContext = React.createContext();
export const FollowingContext = React.createContext();

function App() {
  //State Hook For API data
  const [apiProfileData, setProfileData] = useState([]);
  const [apiFollowerData, setFollowerData] = useState([]);
  const [apiFollowingData, setFollowingData] = useState([]);

  //State Uplifing Data Coming from SearchInput Through Function HandleClick
  const [input, setInput] = useState("muhammadumair11");
  const [btn, setBtn] = useState(false);

  function handleClick(btn, input) {
    setBtn(btn);
    setInput(input);
  }

  //Use Effect Executing Api Functions.

  useEffect(() => {
    // ProfileAPI fetches data from GITHUB API, here it is imported from Seperate Function which is located in API directory
    ProfileAPI(input)
      .then((data) => setProfileData(data))
      .catch((err) => console.error(err));

    // FollowAPI fetches data from GITHUB API, here it is imported from Seperate Function which is located in API directory
    FollowAPI(input, "following")
      .then((data) => setFollowingData(data))
      .catch((err) => console.error(err));

    FollowAPI(input, "followers")
      .then((data) => setFollowerData(data))
      .catch((err) => console.error(err));

    setBtn(false);
  }, [btn]);

  //React Return JSX With Context APIs as Providers

  return (
    <ProfileContext.Provider value={apiProfileData}>
      <FollowerContext.Provider value={apiFollowerData}>
        <FollowingContext.Provider value={apiFollowingData}>
          <Router>
            <Switch>
              <Route
                path="/:user/following"
                component={() => <FollowList following="true" />}
              />
              <Route path="/:user/followers" component={FollowList} />
              <Route path="/:user">
                <Profile profileInputState={handleClick} />
              </Route>
              <Route path="/" exact>
                <Profile profileInputState={handleClick} />
              </Route>
            </Switch>
          </Router>
        </FollowingContext.Provider>
      </FollowerContext.Provider> 
    </ProfileContext.Provider>
  );
}

export default App;
