import React, { useContext } from 'react';

import GlobalContext from "../../contexts/GlobalContext.js";
import DimensionContext from "../../contexts/DimensionContext.js";

function Controls({i}) {

	const {ref, simulation, setGrid, gridEmpty, session, setSession} = useContext(GlobalContext)
	const {dimensions, setDimensions} = useContext(DimensionContext)

	const handleChanges = event => setDimensions({...dimensions, [event.target.name]: event.target.value});

	console.log("changes: ", handleChanges)

	return (
		<div className="controls">
			<div className="controls-actions">
				<button
					onClick={() => {
						setSession(!session);
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
						for (let i = 0; i < dimensions.rows; i++) {
							rows.push(
								Array.from(Array(dimensions.cols), () => (Math.random() > 0.75 ? 1 : 0))
							);
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
				<form action="">
					<div className="info-rows">
						<div>
							<label>
							Rows:
							<input
								type="text"
								value={dimensions.rows}
								onChange={handleChanges}
							/>
							</label>
						</div>
					</div>
					<div className="info-columns">
						<div>
							<label>
								Cols:
							<input
								type="text"
								value={dimensions.cols}
								onChange={handleChanges}
							/>
							</label>
						</div>
					</div>
				</form>
			</div>

		</div>
	)

}

export default Controls;
