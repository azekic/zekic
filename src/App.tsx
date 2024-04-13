import profilePicture from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <img src={profilePicture} className="logo" alt="Profile Picture" />
      </div>
      <h1>Andre Zekic</h1>
      <div className="card">
        <p>Software Developer</p>
      </div>
    </>
  );
}

export default App;
