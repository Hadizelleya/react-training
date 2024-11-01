import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home_container">
      <div className="home_content">
        <h2>Welcome to Your Contacts List</h2>
        <Link to={"/contacts"}>See My Contacts</Link>
        <Link to={"/about"}>About the website</Link>
      </div>
    </div>
  );
}

export default Home;
