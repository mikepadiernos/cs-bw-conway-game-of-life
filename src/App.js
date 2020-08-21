import React, {useState} from 'react';

import './assets/css/App.css';

import GlobalContext from "./contexts/GlobalContexts.js";

import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Controls from "./components/Controls/Controls.js";

function App() {

  const [grid, setGrid] = useState();
  const [action, setAction] = useState(false);

  return (
    <>
      <GlobalContext.Provider value={{grid, setGrid, action, setAction}}>
        <Header />
        <Controls />
        <Main />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
