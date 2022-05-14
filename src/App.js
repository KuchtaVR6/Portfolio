import Portfolio from "./pages/portfolio/Portfolio";

import AOS from 'aos';
import 'aos/dist/aos.css';
import '@splidejs/splide/css/sea-green';


function App() {
    AOS.init();
    return (
        <Portfolio/>
    );
}

export default App;
