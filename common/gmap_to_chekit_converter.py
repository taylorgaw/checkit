from bs4 import BeautifulSoup as bs
import uuid
import json



def convert_to_lat_lon(coords: str):
    coord_list = coords.strip().split(",")
    lat = coord_list[1]
    lon = coord_list[0]
    return (float(lat), float(lon))


with open("denver-bars-and-restaurants.kml") as f:
    content = f.readlines()
    content = "".join(content)
    bs_content = bs(content, "lxml")
    kml = bs_content.find("kml")
    placemarks = kml.find_all("placemark")
    final_places = {}
    for place in placemarks:
        # Generate UUID
        id = str(uuid.uuid1())
        # Note: you must strip out instances of <![CDATA[]]> from the source or else
        # you will have null values for name and recommendations
        name = place.find("name").text
        lat, lon = convert_to_lat_lon(place.find("coordinates").text)
        recs = place.find("description")
        final_places[id] = { 
            "name": name,
            "lat": lat,
            "lon": lon,
            "recommendations": recs.text if recs else "",
            "visited": False
        }
    
    new_file = open("denver_list.json", "w")
    new_file.write(json.dumps(final_places))
    new_file.close()

