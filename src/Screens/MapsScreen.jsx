import React, { useEffect } from "react";
import MapComponent from "../Components/MapComponent.jsx";

export default function MapsScreen (){
    useEffect(()=>{
        console.log("yeys");
    },[]);
    return(
        <div className="container">
            This shall be the maps screen
            <MapComponent/>
        </div>
    )
}