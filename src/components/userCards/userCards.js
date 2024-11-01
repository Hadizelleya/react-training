import "./userCard.css";
import { useState } from "react";
import { Audio } from "react-loader-spinner";

function UserCards({name, email, address, latitude, longitude, phone }){
    const [isToggeled, setIsToggeled] = useState(false);
    const handleToggeling = ()=>{
        setIsToggeled(!isToggeled);
    }
    return (
        <div className="card_container">
            <div className="card_header">
                <h2>{name}</h2>
                <h4>{email}</h4>
            </div>
            <div className="card_content">
                <h4>Address:</h4>
                <p className="card_content_address">{address}</p>
                <p>Latitude: {latitude}   Longitude: {longitude}</p>
                <h4>phone: {phone}</h4>
                <div className="card_content_buttons">
                    {isToggeled && <Audio width={50} height={50} color="#6e6e6e"/>}
                    {!isToggeled ? <button onClick={handleToggeling}>Call</button>
                    :<button onClick={handleToggeling}>End Call</button>}
                </div>
            </div>
        </div>
    )
}
export default UserCards;