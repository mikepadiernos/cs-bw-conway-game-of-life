import React, {useContext} from 'react';
import produce from 'immer'

import GlobalContext from "../../contexts/GlobalContext.js";

function MainCell({i, j}) {

	const {grid, setGrid} = useContext(GlobalContext)

	return (
		<>
			<div
				className={`cell${grid[i][j] ? " filled" : ""}`}
				onClick={() => {
					const newGrid = produce(grid, gridCopy => {
						gridCopy[i][j] = grid[i][j] ? 0 : 1;
					});
					setGrid(newGrid);
				}}
				style={{
					backgroundColor: grid[i][j] ? "orange" : undefined,
					// boxShadow: "0 0 10px rgba(0,0,0,0.15), 0 100px 80px rgba(0,0,0,0.075), 0 40px 100px -50px rgba(170,170,170,0.5)",
					borderRadius: "25%",
					border: "1px solid #919191"
				}}
			/>
		</>
	)
}

export default MainCell;
