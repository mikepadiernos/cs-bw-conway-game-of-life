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

  const gridEmpty = () => {
    const rows = [];
    for (let i = 0; i < dimensions.rows; i++) {
      rows.push(Array.from(Array(dimensions.cols), () => 0));
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
        for (let i = 0; i < dimensions.rows; i++) {
          for (let j = 0; j < dimensions.cols; j++) {
            let neighbors = 0;
            GridOperations.forEach(([x, y]) => {
              const newI = i + x;
              const newJ = j + y;
              if (newI >= 0 && newI < dimensions.rows && newJ >= 0 && newJ < dimensions.cols) {
                neighbors += grid[newI][newJ];
                // console.log("newI: ", newI)
                // console.log("newJ: ", newJ)
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][j] = 0;
            } else if (grid[i][j] === 0 && neighbors === 3) {
              gridCopy[i][j] = 1;
            }
          }
        }
        console.log("grid: ", gridCopy)
      });

    });

    setTimeout(simulation, dimensions.speed);
  }, [dimensions.rows, dimensions.cols, dimensions.speed]);

  return (
    <>
      <GlobalContext.Provider value={{ref, simulation, grid, setGrid, gridEmpty, session, setSession, modal, setModal}}>
        <DimensionContext.Provider value={{dimensions, setDimensions}}>
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
