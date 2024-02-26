import { useState } from "react"
import { useMap } from "react-leaflet"
import { Marker } from "react-leaflet"
import { Popup } from "react-leaflet"

function LocationMarker() {
    const map = useMap()

    
    map.on('click', function(ev) {
        alert(ev.latlng)
    })
  
  }

  export default LocationMarker