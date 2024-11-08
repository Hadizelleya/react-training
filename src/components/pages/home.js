import { Link } from "react-router-dom";
import { MainContext } from "../../utils/context";
import { useContext } from "react";

function Home() {
  const { lastCalledUsername } = useContext(MainContext);
  return (
    <div className="home_container">
      <div className="home_content">
        <h2>Welcome to Your Contacts List</h2>
        {lastCalledUsername && (
          <h2>Last Called User is {lastCalledUsername}</h2>
        )}
        <Link to={"/contacts"}>See My Contacts</Link>
        <Link to={"/about"}>About the website</Link>
      </div>
    </div>
  );
}

export default Home;
