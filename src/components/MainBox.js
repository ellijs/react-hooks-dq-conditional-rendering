import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  const [ showChild, setShowChild ] = useState("profile")

  let detailsToDisplay = {
    profile: <Profile />,
    photos: <Photos />,
    cocktails: <Cocktails />,
    pokemon: <Pokemon />
  }
 
  function renderChild(value) {
    setShowChild(value)
  }
  
  return (
    <div>
      <MenuBar handleOnClick={renderChild} showChild={showChild}/>
      {detailsToDisplay[showChild]}
    </div>
  );
}

export default MainBox;
