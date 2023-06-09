import React from "react";
import "./style/Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body"

function Player({ spotify }) {
	return (
		<div className="player">
			<div className="player__body">
				<Sidebar />
				<Body />
			</div>
		</div>
	)
};

export default Player;