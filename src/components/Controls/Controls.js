import React, {useContext, useState} from 'react';

import GlobalContext from "../../contexts/GlobalContext.js";
import DimensionContext from "../../contexts/DimensionContext.js";

function Controls() {

	const {ref, simulation, setGrid, gridEmpty, session, setSession} = useContext(GlobalContext)
	const {dimensions, setDimensions, numRows, numCols} = useContext(DimensionContext)

	const handleChanges = event => {
		setDimensions({...dimensions, [event.target.name]: event.target.value.replace(/[^\d]/,'')})
		console.log("value: ", event.target.value);
		console.log("dimensions: ", dimensions);
	};
	const handleSubmit = event => {
		event.preventDefault();
	}

	return (
		<div className="controls">
			<div className="controls-actions">
				<button
					onClick={() => {
						setSession(!session);
						console.log("session: ", session)
						if (!session) {
							ref.current = true;
							simulation();
						}
					}}
					className={`button-action ${session ? "action-stop" : "action-play"}`}
					title="Start / Stop Simulation"
				>
					<i className={session ? "cil-media-stop" : "cil-media-play"} />
					{session ? "stop" : "start"}
				</button>
				<button
					onClick={() => {
						const rows = [];
						for (let i = 0; i < numRows; i++) {
							rows.push(
								Array.from(Array(numCols), () => (Math.random() > 0.75 ? 1 : 0))
							);
						console.log("Rows: ", rows)
						}

						setGrid(rows);
					}}
					className="button-random"
					title="Randomize Cells"
				>
					<i className="cil-casino"/>
					random
				</button>
				<button
					onClick={() => {
						setGrid(gridEmpty());
					}}
					className="button-clear"
					title="Clear Cells"
				>
					<i className="cil-x-circle" />
					clear
				</button>
			</div>
			<div className="controls-info">
				<form
					onSubmit={handleSubmit}
				>
					<label className="info-rows">
					Rows:
					<input
						type="text"
						name="rows"
						value={numRows}
						onChange={handleChanges}
					/>
					</label>
					<label className="info-columns">
						Cols:
						<input
							type="text"
							name="cols"
							value={numCols}
							onChange={handleChanges}
						/>
					</label>
				</form>
			</div>

		</div>
	)

}

export default Controls;
