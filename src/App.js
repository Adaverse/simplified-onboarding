import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import BrandExample from "./components/navbar/navbar"
function App() {
  return (
      <Router>
        <BrandExample />
      </Router>
  );
}

export default App;