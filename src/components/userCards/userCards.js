import "./userCard.css";
import { useState, useContext } from "react";
import { Audio } from "react-loader-spinner";
import { MainContext } from "../../utils/context";

function UserCards({ name, email, address, phone }) {
  const { street, suite, city, zipcode, geo } = address;
  const { lat, lng } = geo;
  const [isToggeled, setIsToggeled] = useState(false);
  const { lastCalledUsername, getLastCalledUsername } = useContext(MainContext);
  const handleToggelingCall = () => {
    setIsToggeled(!isToggeled);
    getLastCalledUsername(name);
  };
  const handleToggelingEndCall = () => {
    setIsToggeled(!isToggeled);
    getLastCalledUsername(name);
  };
  return (
    <div className="card_container">
      <div className="card_header">
        <h2>{name}</h2>
        <h4>{email}</h4>
      </div>
      <div className="card_content">
        <h4>Address:</h4>
        <p className="card_content_address">
          {street},{suite}, {city}, {zipcode}
        </p>
        <p>
          Latitude: {lat} Longitude: {lng}
        </p>
        <h4>phone: {phone}</h4>
        <div className="card_content_buttons">
          {isToggeled && <Audio width={50} height={50} color="#6e6e6e" />}
          {!isToggeled ? (
            <button onClick={handleToggelingCall}>
              {lastCalledUsername === name ? "Call Again" : "Call"}
            </button>
          ) : (
            <button onClick={handleToggelingEndCall}>End Call</button>
          )}
        </div>
      </div>
    </div>
  );
}
export default UserCards;
