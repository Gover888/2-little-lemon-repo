import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";
import "./App.css"
import Booking from "./pages/Booking";
function App() {


    return (
        <BrowserRouter>
            < NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/booking" element={<Booking/>}/>
            </Routes>
            < Footer/>
        </BrowserRouter>
    );
}

export default App;
