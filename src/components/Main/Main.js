import React, {useContext} from 'react';


import GlobalContext from "../../contexts/GlobalContext.js";
import DimensionContext from "../../contexts/DimensionContext.js";

import MainCell from "./MainCell.js";


function Main() {

	const {grid} = useContext(GlobalContext)
	const {dimensions} = useContext(DimensionContext)
	console.log("dimensions: ", dimensions)

	return (
		<main
			className="grid"
			style={{
				gridTemplateColumns: `repeat(${dimensions.cols}, 1fr)`,
				gridTemplateRows: `repeat(${dimensions.rows}, 1fr)`
			}}
			>
				{grid.map((rows, i) =>
					rows.map((cols, j) => (
						<MainCell i={i} j={j} key={`${i}-${j}`}/>
					))
				)}
		</main>
	)
}

export default Main;
