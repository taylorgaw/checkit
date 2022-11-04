import L, { LatLngExpression } from 'leaflet';
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';

import  { Spot } from '../resources/Spot'

const list: Spot[] = [
    {
        name: "Illegal Pete's Lodo",
        location: "1610 16th St Mall, Denver, CO 80202",
        lat: 39.751258,
        long: -105.0003656,
        recommendations: "Way better than Chipotle. Discounts offered for event ticket holders",
    },
    {
        name: "The 1UP Arcade Bar - LoDo",
        location: "1925 Blake St, Denver, CO 80202",
        lat: 39.753907,
        long: -104.9951407,
        recommendations: "Cool Barcade - seems like a good pregame for a ballgame",
    },
    {
        name: "Onefold",
        location: "1919 19th St, Denver, CO 80202",
        lat: 39.7559984,
        long: -104.9987864,
        recommendations: "Great brunch spot serving breakfast tacos, congee with duck confit, and fried rice with Chinese sausage as well as sometime specials like loco moco and pozole, all paired with iced Vietnamese coffee or old-school Screwdrivers. PT Recommendation",
    },
]

export default function FavoritesMap() {
    //Defalt coordinates set to Denver Union Station
    const position: LatLngExpression = [39.7522, -104.9989];
    const zoom: number = 15;

    const icon: L.DivIcon = L.divIcon({
        className: "spot-icon",
        iconSize: [30, 30],
        iconAnchor: [0, 0],
        popupAnchor: [15, 0],
      });

    return (
        <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
            <TileLayer 
                attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                list.map((item, index) => ( 
                    <Marker
                        icon={icon}
                        key={index}
                        position={[item.lat, item.long]}
                        title={`${item.name} at ${item.location}`}
                    >
                        <Popup>
                            <strong>
                                {item.name}
                            </strong>
                            <br />
                            <p>
                                {item.recommendations && <em>{item.recommendations}</em>}
                            </p>
                            <p>
                                {item.location}
                            </p>
                        </Popup>
                    </Marker>
               ))
            }
        </MapContainer>
    );
}