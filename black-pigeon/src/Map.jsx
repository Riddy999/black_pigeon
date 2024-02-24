import { MapContainer, TileLayer } from 'react-leaflet'
import ClassicButton from './ClassicButton.jsx'
import 'leaflet/dist/leaflet.css'

function Map() {

  return (
    <>
      <MapContainer zoomControl={false} minZoom={14} maxZoom={18} className='h-full' center={[48.2083, 16.3731]} zoom={14}>

        <ClassicButton />
        <TileLayer
          url="http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

      </MapContainer>
    </>
  )
}

export default Map
