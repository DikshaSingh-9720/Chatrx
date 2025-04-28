import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing.jsx";
import Authentication from "./pages/Authentication.jsx";
import { AuthProvider } from "./contexts/AuthContext";
import VideoMeetComponent from "./pages/VideoMeet.jsx";
import HomeComponent from "./pages/home";
import History from "./pages/History.jsx";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/auth" element={<Authentication />} />
            <Route path="/" element={<LandingPage />} />
            <Route path='/home' element={<HomeComponent />} />
            <Route path='/history' element={<History />} />
            <Route path="/:url" element={<VideoMeetComponent />}/>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
