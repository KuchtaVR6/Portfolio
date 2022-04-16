import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Portfolio from "./pages/portfolio/Portfolio";
import NotFound from "./pages/notFound/NotFound";

import AOS from 'aos';
import 'aos/dist/aos.css';
import '@splidejs/splide/css/sea-green';


function App() {
    AOS.init();
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Portfolio/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    );
}

export default App;
