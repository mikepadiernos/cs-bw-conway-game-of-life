import React, {useCallback, useRef, useState} from 'react';
import produce from "immer";
import Modal from "react-modal"

import './assets/css/App.css';

import GlobalContext from "./contexts/GlobalContext.js";
import DimensionContext from "./contexts/DimensionContext.js";

import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Controls from "./components/Controls/Controls.js";
import About from "./components/About/About.js";

import DimensionsDefault from "./components/Dimensions/Dimensions.js";

import {GridOperations} from "./components/Grid/GridOperations";

Modal.setAppElement('#root');

function App() {
  const [dimensions, setDimensions] = useState(DimensionsDefault)

  let numRows = Number(dimensions.rows);
  let numCols = Number(dimensions.cols);

  console.log("numCols: ", numCols)
  console.log("numRows: ", numRows)

  const gridEmpty = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  };

  const [modal, setModal] = useState(false);
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

    setGrid((grid) => {
      return produce(grid, gridCopy => {
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            let neighbors = 0;
            GridOperations.forEach(([x, y]) => {
              const newI = i + x;
              const newJ = j + y;
              if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
                neighbors += grid[newI][newJ];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][j] = 0;
            } else if (grid[i][j] === 0 && neighbors === 3) {
              gridCopy[i][j] = 1;
            }
          }
        }
      });
    });

    setTimeout(simulation, 100);
  }, []);

  return (
    <>
      <GlobalContext.Provider value={{ref, simulation, grid, setGrid, gridEmpty, session, setSession, modal, setModal}}>
        <DimensionContext.Provider value={{dimensions, setDimensions, numRows, numCols}}>
          <Header />
          <Controls />
          <Main />
	        <Modal
		        isOpen={modal}
		        onRequestClose={() => setModal(false)}
	        >
		        <About />
	        </Modal>
        </DimensionContext.Provider>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
