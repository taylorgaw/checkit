import { useState } from "react";

import { Spot } from "../resources/MapResources";


type SpotPopupProps = {
    spot: Spot;
}

const SpotPopup: React.FC<SpotPopupProps> = (props) => {
    const { spot } = props;
    const [checked, setChecked] = useState<boolean>(spot.visited);
    const [name, setName] = useState<string>(spot.name);
    const [recommendations, setRecommendations] = useState<string>(spot.recommendations);
    const [isEditing, setEditing] = useState(false);

    const handleEdit = () => {
        setEditing(!isEditing)
    };

    const handleSave = () => {

    };

    const handleNameChange = (event: React.FormEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value);
    };

    const handleRecommendationChange = (event: React.FormEvent<HTMLInputElement>) => {
        setRecommendations(event.currentTarget.value);
    };

    const handleToggle = () => {
        setChecked(!checked);
    };

    return(
        <div>
            { isEditing? 
                <div className="editForm">
                    <label >Name: </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                    <br />
                    <label >Recommendations: </label>
                    <input 
                        type="text" 
                        id="recommendations" 
                        name="recommendations" 
                        value={recommendations}
                        onChange={handleRecommendationChange}
                    />
                    <br />
                    <input 
                        type="checkbox" 
                        checked={checked}
                        onChange={handleToggle}
                    />
                    <label >Visted</label>
                    <p>{`${spot.lat}, ${spot.lon}`}</p>
                    <button onClick={handleSave}>Save</button>
                </div> : 
                <div>
                    <h3>{spot.name}</h3>
                    <p><em>{spot.recommendations}</em></p>
                    <input type="checkbox" 
                        checked={checked}
                        onChange={handleToggle}
                    />
                    <label >Visted</label>
                    <p>{`${spot.lat}, ${spot.lon}`}</p>
                </div> 
            }
            <button onClick={handleEdit}>Edit</button>
        </div>
    )
};

export default SpotPopup;