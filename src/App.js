import React, {useCallback, useRef, useState} from 'react';
import produce from "immer";

import './assets/css/App.css';

import GlobalContext from "./contexts/GlobalContext.js";

import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Controls from "./components/Controls/Controls.js";

import {GridOperations} from "./components/Grid/GridOperations";

function App() {

  const numRows = 80;
  const numCols = 120;

  const gridEmpty = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  };

  const [session, setSession] = useState(false);
  const [grid, setGrid] = useState(() => {
    return gridEmpty()
  });

  const ref = useRef(session);
  ref.current = session;

  const simulation = useCallback(() => {
    if (!ref.current) {
      return;
    }

    setGrid((g) => {
      return produce(g, gridCopy => {
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            let neighbors = 0;
            GridOperations.forEach(([x, y]) => {
              const newI = i + x;
              const newJ = j + y;
              if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
                neighbors += g[newI][newJ];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][j] = 0;
            } else if (g[i][j] === 0 && neighbors === 3) {
              gridCopy[i][j] = 1;
            }
          }
        }
      });
    });

    setTimeout(simulation, 80);
  }, []);

  return (
    <>
      <GlobalContext.Provider value={{ref, simulation, numRows, numCols, grid, setGrid, gridEmpty, session, setSession}}>
        <Header />
        <Controls />
        <Main />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
