import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import { Marker, TileLayer, Popup } from 'react-leaflet';

import  { UserMap, Spot } from '../resources/MapResources'
import SpotPopup from './SpotPopup';
import { useState } from 'react';

type FavoritesMapProps = {
    collection: UserMap;
}

const FavoritesMap: React.FC<FavoritesMapProps> = (props) => {
    //Defalt coordinates set to Denver Union Station
    const [ spotList, setSpotList ] = useState(props.collection.layers[0].spots)

    const icon = L.divIcon({
        className: "spot-icon",
        iconSize: [12, 12],
        iconAnchor: [0, 0],
        popupAnchor: [15, 0]
    });

    const handleClickNewSpot = () => {
        console.log("Clicked on a new spot")
    };

    return (
        <>
            <TileLayer 
                attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <button
                id="placeNewMarkerButton"
                onClick={handleClickNewSpot}
            >
                +
            </button>
            {
                spotList.map((item, index) => ( 
                    <Marker
                        icon={icon}
                        key={index}
                        position={[item.lat, item.lon]}
                        title={`${item.name}`}
                    >
                        <Popup>
                            <SpotPopup
                                spot={item as Spot}
                            />
                        </Popup>
                    </Marker>
               ))
            }
        </>    
    );
}

export default FavoritesMap;