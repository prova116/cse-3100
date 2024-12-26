import { Route, Routes } from 'react-router-dom'; // Correct import from 'react-router-dom'
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import About from './views/About';
import Contact from './views/Contact';
import Donate from './views/Donate';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="available-cats" element={<AvailableCats />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="donate" element={<Donate />} />
      </Route>
    </Routes>
  );
}

export default App;