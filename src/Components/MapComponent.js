import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import icons from '../Images/favicon.png';

export default function MapComponent() {
	const mapStyle = { height: "500px", width: "100%" };

	const position = { lat: 43.653226, lng: -79.383184 };

	//const icon = (<Icon iconUrl={icons} />)
	var myIcon = window.L.icon({
		iconUrl: icons,
		iconSize: [38, 95],
		iconAnchor: [22, 94],
		popupAnchor: [-3, -76],
		shadowAnchor: [22, 94]
	});

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
			<Marker icon={myIcon} position={position}>
				<Popup >
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
	);

	// for google maps implementation if you ever come around to it
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
