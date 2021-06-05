import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import fbase from "fbase";
import { authService } from "fbase"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  })

  return (
    <>
      {init ? <AppRouter userObj={userObj}isLoggedIn={isLoggedIn} /> : "Initializing...."}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;