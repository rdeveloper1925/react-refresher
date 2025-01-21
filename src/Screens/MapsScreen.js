import React, { useEffect } from "react";
import MapComponent from "../Components/MapComponent";

export default function MapsScreen (){
    useEffect(()=>{
        console.log(process.env.REACT_APP_TESTING);
    },[]);
    return(
        <div className="container">
            This shall be the maps screen
            <MapComponent/>
        </div>
    )
}