import React, {useContext, useRef} from 'react';

import GlobalContext from "../../contexts/GlobalContexts.js";

function Controls({i}) {

	const {ref, simulation, numRows, numCols, grid, setGrid, gridEmpty, session, setSession} = useContext(GlobalContext)

	return (
		<div className="controls">
			<button
				onClick={() => {
					setSession(!session);
					if (!session) {
						ref.current = true;
						simulation();
					}
				}}>
				<i/>
				{session ? "stop" : "start"}
			</button>
			<button
				onClick={() => {
					const rows = [];
					for (let i = 0; i < numRows; i++) {
						rows.push(
							Array.from(Array(numCols), () => (Math.random() > 0.15 ? 1 : 0))
						);
					}

					setGrid(rows);
				}}
			>
				<i/>
				random
			</button>
			<button
				onClick={() => {
					setGrid(gridEmpty());
				}}
			>
				<i/>
				clear
			</button>
		</div>
	)

}

export default Controls;
