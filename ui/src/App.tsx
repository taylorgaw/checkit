import './App.css';
import { useState } from 'react';
import FavoritesMap from './components/FavoritesMap';
import { MapContainer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { StockMap } from './resources/constants';
import { UserMap } from './resources/MapResources';


function App() {
  const [map, setMap] = useState<UserMap>(StockMap);
  const position: LatLngExpression = [map.lat, map.lon];

  return (
    <div className="App">
      <h1>{map.name}</h1>
      <MapContainer
            center={position} 
            zoom={map.zoom}
            scrollWheelZoom={true}
            touchZoom={true}
        >
          <FavoritesMap
            collection={map}
          />
        </MapContainer>
    </div>
  );
}

export default App;
