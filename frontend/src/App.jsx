import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import Authantication from "./pages/authantication";
import { AuthProvider } from "./context/AuthContext";
import VideoMeetComponent from "./pages/VideoMeet";

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Authantication/>}/>
        <Route path="/:url" element={<VideoMeetComponent/>}/>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;