import { List } from "semantic-ui-react";
import { UserMap } from "../resources/MapResources";

type FavoritesListProps = {
    collection: UserMap;
    isListOpen: boolean;
}

const FavoritesList: React.FC<FavoritesListProps> = (props) => {
    const { collection, isListOpen } = props;

    // This will need to be changed to support multiple layers
    return (
        <List divided relaxed className="favoritesList"
        style={{
            top: isListOpen ? '5vh' : '200vh'
        }}
        >
            {collection.layers[0].spots.map((spot) => {
                return (
                    <List.Item key={`${spot.lat}${spot.lon}`}>
                        <List.Content className="favoritesListItem" >
                            <List.Header as="a" href='#'>{spot.name}</List.Header>
                            <List.Description>{spot.recommendations}</List.Description>
                        </List.Content>
                    </List.Item>
                );
            })}
        </List>
    )
}

export default FavoritesList;