import Menu from "./component/header/Menu";
import Navbar from "./component/header/Navbar";
import { BrowserRouter as Router, Switch, Route, Outlet } from "react-router-dom";
import Leftsidebar from "./component/siddebar/Leftsidebar";

function App() {
  return (
    <>
      <Navbar />
      <Menu />
      <Leftsidebar />
      {/* <Outlet /> */}
    </>
  );
}

export default App;
