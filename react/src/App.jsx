import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from "./Login";
import Home from "./Pages/Home";
import Contact from "./Pages/Contectus";
import Tools from "./Pages/Tools";
import TextWithimg from "./Pages/Imgtxt";
import Register from "./Register";
import Texttopdf from "./Pages/Texttopdf";
import AboutUS from "./Pages/Aboutus";
import Upload from "./Pages/Cloud";
import Profile from "./Pages/Profile";
import ErrorPage from "./Components/Errr";
// import TextWithimg from "./Pages/Imgtxt";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/texttopdf" element={<Texttopdf />} />
        <Route path="/imgtxt" element={<TextWithimg />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>

  );
}

export default App;
