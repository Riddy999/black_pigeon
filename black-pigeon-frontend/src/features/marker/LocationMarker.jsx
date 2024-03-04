import { useState } from "react"
import { useMap } from "react-leaflet"
import { Marker } from "react-leaflet"
import { Popup } from "react-leaflet"
import { addLocation } from "./locationSlice"
import { useDispatch } from 'react-redux';

function LocationMarker() {
    const dispatch = useDispatch();
    const map = useMap()
    var coordinates = {
        lat: Float64Array, 
        lng: Float64Array
    }
    var locations = []


    map.on('click', function(ev) {
        coordinates.lat = ev.latlng.lat
        coordinates.lng = ev.latlng.lng
        locations.push([coordinates])
        console.log(locations)
        dispatch(addLocation([ev.latlng.lat, ev.latlng.lng]))
    })


  
  }

  export default LocationMarker