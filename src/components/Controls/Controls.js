import React, {useContext} from 'react';
import Select from 'react-select';

import GlobalContext from "../../contexts/GlobalContext.js";
import DimensionContext from "../../contexts/DimensionContext.js";

import DimensionsSpeed from "../Dimensions/DimensionsSpeed.js";

function Controls() {

	const {ref, simulation, setGrid, gridEmpty, session, setSession} = useContext(GlobalContext)
	const {dimensions, setDimensions} = useContext(DimensionContext)

	console.log("dimensions: ", dimensions);

	const handleChanges = event => {
		setDimensions({...dimensions, [event.target.name]: Number(event.target.value)})
		// console.log("value: ", event.target.value);
	};

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
						for (let i = 0; i < dimensions.rows; i++) {
							rows.push(
								Array.from(Array(dimensions.cols), () => (Math.random() > 0.75 ? 1 : 0))
							);
						// console.log("Rows: ", rows)
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
				<form>
					<label className="info-rows">
					Rows
					<input
						type="text"
						name="rows"
						value={dimensions.rows}
						onChange={handleChanges}
					/>
					</label>
					<label className="info-columns">
						Cols
						<input
							type="text"
							name="cols"
							value={dimensions.cols}
							onChange={handleChanges}
						/>
					</label>
					<label className="info-speed">
						Speed
						<input
							type="text"
							name="speed"
							value={dimensions.speed}
							onChange={handleChanges}
						/>
						{/*<Select*/}
						{/*	name="speed"*/}
						{/*	value={dimensions.speed}*/}
						{/*	onChange={dimensions.speed}*/}
						{/*	options={DimensionsSpeed}*/}
						{/*/>*/}
					</label>
				</form>
			</div>

		</div>
	)

}

export default Controls;
