import './App.css';
// import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import BrandExample from "./components/navbar/navbar"
import Homes from './pages/Homes';
import SignIn from './pages/Signin';
import Studentlist from './pages/studentlist';
import DiscreteSliderLabel from './components/slider/slider'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
        <Router>
            {/* <BrandExample /> */}
            <Switch>
                <Route path="/homes/viewOnboarding">
                    <Studentlist/>
                </Route>
                <Route path="/homes">
                    <Homes/>
                </Route>
                <Route path="/slider">
                    <DiscreteSliderLabel/>
                </Route>
                <Route path="/">
                    <SignIn/>
                </Route>
            </Switch>
            {/* <Landing/>
        <SignIn/> */}

        </Router>
    );
}

export default App;