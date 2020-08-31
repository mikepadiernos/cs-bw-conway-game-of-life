import React, {useContext} from 'react';
import GlobalContext from "../../contexts/GlobalContext";

function Header() {

	const {setModal} = useContext(GlobalContext)

	return (
		<header className="App-header">
			<h1 className="app-title title no-top">
				Conway's Game of Life
			</h1>
			<div className="app-about">
			<button
				className="about-button"
				onClick={() => {setModal(true)}}
				title="Info for Conway's game of life"
			>
				<i className="cil-bookmark"/>
				about
			</button>
			</div>
		</header>
	)
}

export default Header;
