import { useState } from "react"
import { useMap } from "react-leaflet"
import { Marker } from "react-leaflet"
import { Popup } from "react-leaflet"

function LocationMarker() {
    const map = useMap()
    var coordinates = {
        lat: Float64Array, 
        lng: Float64Array
    }


    map.on('click', function(ev) {
        coordinates.lat = ev.latlng.lat
        coordinates.lng = ev.latlng.lng
        console.log(coordinates.lat+" --- "+coordinates.lng)
    })
  
  }

  export default LocationMarker