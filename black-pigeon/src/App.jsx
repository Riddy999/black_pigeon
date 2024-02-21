import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function App() {

  return (
        <MapContainer className='h-full' center={[48.2083, 16.3731]} zoom={13}>
          <TileLayer
            attribution='© OpenStreetMap Contributors. Tiles courtesy of Humanitarian 
            OpenStreetMap Team'
            url="http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
        </MapContainer>
  )
}

export default App
