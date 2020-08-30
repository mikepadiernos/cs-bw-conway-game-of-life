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
				onClick={() => {setModal(true)}}
			>
				<i className="cil-info-circle"/>
				about
			</button>
			</div>
		</header>
	)
}

export default Header;
