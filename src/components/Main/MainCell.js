import React, {useContext} from 'react';
import produce from 'immer'

import GlobalContext from "../../contexts/GlobalContexts.js";

function MainCell({i, j}) {

	const {grid, setGrid} = useContext(GlobalContext)

	return (
		<>
			<div
				className="grid"
				onClick={() => {
					const newGrid = produce(grid, gridCopy => {
						gridCopy[i][j] = grid[i][j] ? 0 : 1;
					});
					setGrid(newGrid);
				}}
				style={{
					width: '100%',
					height: '100%',
					backgroundColor: grid[i][j] ? "orange" : undefined,
					border: "solid 1px black"
				}}
			/>
		</>
	)
}

export default MainCell;
