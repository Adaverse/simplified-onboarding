import './App.css';
// import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import BrandExample from "./components/navbar/navbar"
import Homes from './pages/Homes';
import SignIn from './pages/Signin';
import Student from './pages/StudentProcess';

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
                <Route path="/address">
                    <Student/>
                </Route>
                <Route path="/homes">
                    <Homes/>
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