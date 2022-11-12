import { useState } from "react";

import { Spot } from "../resources/MapResources";


type SpotPopupProps = {
    spot: Spot;
}

const SpotPopup: React.FC<SpotPopupProps> = (props) => {
    const { spot } = props;

    return(
        <div>
            <h3>{spot.name}</h3>
            <p><em>{spot.recommendations}</em></p>
            <p>{`${spot.lat}, ${spot.lon}`}</p>
        </div> 
    )
};

export default SpotPopup;