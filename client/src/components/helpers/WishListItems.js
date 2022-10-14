import React from "react";
import { useNavigate } from "react-router-dom";

function WishListItems({ image, name, id }) {
	
	const navigate = useNavigate();
	let IMAGE = image.IMAGE[id];
	
	return (
		<div
			className="wishListItems"
			onClick={() => {
				navigate("/wedding/" + id);
			}}
		>
			<div style={{ backgroundImage: `url(${IMAGE[name]})` }} className="bgImage" />
			<h1> {name} </h1>
		</div>
	);
}

export default WishListItems;