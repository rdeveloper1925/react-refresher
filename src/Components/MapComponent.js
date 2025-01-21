import React from "react";
// import {
//     MapContainer,
//     TileLayer,
//     Marker,
//     Popup
//   } from 'https://cdn.esm.sh/react-leaflet';
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

export default function MapComponent() {
	const mapStyle = { height: "500px", width: "100%" };

	const position = { lat: 43.653226, lng: -79.383184 };

	return (
		<MapContainer
			center={position}
			zoom={13}
			scrollWheelZoom={false}
			style={mapStyle}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={position}>
				<Popup >
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
	);

	// return (
	// 	<APIProvider apiKey={key}>
	// 		<Map
	// 			center={center}
	// 			clickableIcons={true}
	// 			zoom={13}
	//             style={mapStyle}
	// 			defaultCenter={center}
	// 			defaultZoom={3}
	// 			gestureHandling={"greedy"}
	// 			disableDefaultUI={true}
	// 		></Map>
	// 	</APIProvider>
	// );
}
