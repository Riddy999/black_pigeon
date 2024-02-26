import { MapContainer, TileLayer, SVGOverlay, useMapEvents } from 'react-leaflet'
import ButtonContainer from './ButtonContainer.jsx'
import 'leaflet/dist/leaflet.css'
import React from 'react'
import LocationMarker from './LocationMarker.jsx'

function Map() {
  return (
    <>
      <MapContainer zoomControl={false} minZoom={14} maxZoom={18} className='h-full flex flex-col-reverse' center={[48.2083, 16.3731]} zoom={14}>

        <ButtonContainer/>
        <TileLayer
          url="http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <li>
        <LocationMarker/>
        </li>

      </MapContainer>
    </>
  )
}

export default Map
