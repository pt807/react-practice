import React from "react";
import "./assets/css/App.css";
import KanbanBoard from "./KanbanBoard.js";

const App = () => {
  return (
    <div id="App" className={"App"}>
      <KanbanBoard />
    </div>
  );
}

export default App;
