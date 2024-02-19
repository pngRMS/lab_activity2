import React, { useState } from "react";
import "./App.css";
import LoginPage from "./Component/LoginPage.js";
import ContentPage from "./Component/ContentPage.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="">
      {isLoggedIn ? <ContentPage /> : <LoginPage onLogin={handleLogin} />}
    </div>
  );
}

export default App;
