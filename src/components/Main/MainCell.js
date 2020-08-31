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
			/>
		</>
	)
}

export default MainCell;
