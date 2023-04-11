import './App.css';
import { useState } from 'react';
import FavoritesMap from './components/FavoritesMap';
import { MapContainer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { StockMap, CityNavOptions } from './resources/constants';
import { UserMap } from './resources/MapResources';
import TopMenu from './components/TopMenu';
import BottomMenu from './components/BottomMenu';
import CitySideNav from './components/CitySideNav';
import FavoritesList from './components/FavoritesList';


function App() {
  const [map, setMap] = useState<UserMap>(StockMap);
  const position: LatLngExpression = [map.lat, map.lon];
  const [isCitySideNavOpen, setIsCitySideNavOpen] = useState<boolean>(false);
  const [isListOpen, setIsListOpen] = useState<boolean>(false);

  const handleClickCityMenu = () => {
    setIsCitySideNavOpen(true);
  };

  const handleClickListMenu = () => {
    setIsListOpen(!isListOpen);
    console.log(isListOpen)

  };

  const handleClickCityClose = () => {
    setIsCitySideNavOpen(false);
  };

  const handleClickUser = () => {
    console.log("Clicked User")
  };

  const handleClickAdd = () => {
    console.log("Clicked Add")
  };

  return (
    <div className="App">
      <TopMenu 
        mapName={map.name}
        handleClickListMenu={handleClickListMenu}
        handleClickMenu={handleClickCityMenu}
        isListOpen={isListOpen}
      />
      <CitySideNav
        title='Locations'
        options={CityNavOptions}
        isCityOpen={isCitySideNavOpen}
        handleClickCityClose={handleClickCityClose}
      />
      <FavoritesList
        collection={map}
        isListOpen={isListOpen}
      />
      <MapContainer
        center={position} 
        zoom={map.zoom}
        scrollWheelZoom={true}
        touchZoom={true}
      >
        <FavoritesMap collection={map} />
      </MapContainer> 
      <BottomMenu 
        handleClickAdd={handleClickAdd}
        handleClickUser={handleClickUser}
      />
    </div>
  );
}

export default App;
