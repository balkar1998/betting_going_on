import Menu from "./component/header/Menu";
import Navbar from "./component/header/Navbar";
import { BrowserRouter as Router, Switch, Route, Outlet } from "react-router-dom";
import Leftsidebar from "./component/siddebar/Leftsidebar";
import logo from "./background.png";
import MatchCard from "./component/body/MatchCard";
import { useState } from "react";

function App() {
  const [currentMatch, setCurrentMatch] = useState([]);

  // Function to receive data from the child
  const receiveDataFromChild = (data) => {
    setCurrentMatch(data)
  };

  return (
    <>
      <div className="grid">
        <div className="col-span-6">
          <Navbar />
          <Menu />
        </div>
        <div className="col-span-1" style={{'width':''}}>
          <Leftsidebar sendDataToParent={receiveDataFromChild} />
        </div>
        <div className="col-span-5" style={{
          backgroundImage: `url(${logo})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
        }}>
          <MatchCard matchDetail={currentMatch}/>
        </div>
      </div>
      {/* <Outlet /> */}
    </>
  );
}

export default App;
