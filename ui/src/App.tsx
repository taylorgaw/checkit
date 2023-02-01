import './App.css';
import { useState } from 'react';
import FavoritesMap from './components/FavoritesMap';
import { MapContainer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { StockMap } from './resources/constants';
import { UserMap } from './resources/MapResources';
import TopMenu from './components/TopMenu';
import BottomMenu from './components/BottomMenu';


function App() {
  const [map, setMap] = useState<UserMap>(StockMap);
  const position: LatLngExpression = [map.lat, map.lon];

  const handleClickMenu = () => {
    console.log("Clicked Menu")
  }

  const handleClickAdd = () => {
    console.log("Clicked Add")
  }

  return (
    <div className="App">
      <TopMenu 
        mapName={map.name}
        handleClickAdd={handleClickAdd}
        handleClickMenu={handleClickMenu}
      />
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
      <BottomMenu />
    </div>
  );
}

export default App;
