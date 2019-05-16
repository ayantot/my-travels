import React from "react";

const Travel = ({ destination, country, image, distance }) => (
	<div>
		<h1>{country}</h1>
		<img src={image} alt={destination} />
        <h4>{destination}</h4>
		<p>{distance}</p>
	</div>
);

export default Travel;