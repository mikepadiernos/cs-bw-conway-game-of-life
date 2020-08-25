import React, {useContext} from 'react';


import GlobalContext from "../../contexts/GlobalContexts.js";

import MainCell from "./MainCell.js";

function Main() {

	const {numRows, numCols, grid, setGrid, moving, setMoving} = useContext(GlobalContext)

	return (
		<main
			className="grid"
			style={{
				gridTemplateColumns: `repeat(${numCols}, 2%)`
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
