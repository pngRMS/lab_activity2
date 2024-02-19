import React from "react";
import MainPage from "./MainPage";
import Sidebar from "./Sidebar";

function ContentPage() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <MainPage></MainPage>
    </div>
  );
}

export default ContentPage;
