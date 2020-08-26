import React, {useContext} from 'react';


import GlobalContext from "../../contexts/GlobalContext.js";

import MainCell from "./MainCell.js";

function Main() {

	const {numRows, numCols, grid, setGrid, moving, setMoving} = useContext(GlobalContext)

	return (
		<main
			className="grid"
			style={{
				gridTemplateColumns: `repeat(${numCols}, 1fr)`,
				gridTemplateRows: `repeat(${numRows}, 1fr)`
			}}
			>
				{grid.map((rows, i) =>
					rows.map((col, j) => (
						<MainCell i={i} j={j} key={`${i}-${j}`}/>
					))
				)}
		</main>
	)
}

export default Main;
