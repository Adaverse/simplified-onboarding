import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import BrandExample from "./components/navbar/navbar"
import Landing from './pages/Landing';
import SignIn from './pages/Signin';
function App() {
  return (
      <Router>
        {/* <BrandExample /> */}
        {/* <Landing/> */}
        <SignIn/>
        
      </Router>
  );
}

export default App;