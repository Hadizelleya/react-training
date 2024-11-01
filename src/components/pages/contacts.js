import UserCards from "../userCards/userCards";
import "./contacts.css";
import users from "../content/users.json";
import { useNavigate } from "react-router-dom";

function Contacts() {
  const navigate = useNavigate();
  return (
    <div className="contacts_container">
      <div className="contacts_cards">
        {users.map((user) => {
          return (
            <UserCards
              name={user.name}
              email={user.email}
              address={user.address}
              latitude={user.latitude}
              longitude={user.longitude}
              phone={user.phone}
            />
          );
        })}
      </div>
      <div className="back">
        <button className="back_button" onClick={() => navigate("/")}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Contacts;
