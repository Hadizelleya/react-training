import UserCards from "../userCards/userCards";
import "./contacts.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Contacts() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, isLoading] = useState(false);
  useEffect(() => {
    isLoading(true);
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
      isLoading(false);
    };
    getData();
  }, []);

  return (
    <div className="contacts_container">
      <div className="contacts_cards">
        {loading ? (
          <p className="data-loading">The Data is Loading </p>
        ) : (
          users.map((user, index) => {
            return (
              <UserCards
                key={index}
                name={user.name}
                email={user.email}
                address={user.address}
                phone={user.phone}
              />
            );
          })
        )}
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
