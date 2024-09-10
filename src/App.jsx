import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Login from "./auth/Login";
import ProjectForm from "./components/Forms/ProjectForm";
import IdeaForm from "./components/Forms/IdeaForm";
import Mentor from "./pages/Mentor";
import RegisterChoice from "./auth/RegisterChoice";
import MentorRegister from "./auth/MentorRegister";
import StudentRegister from "./auth/StudentRegister";
import ProjectDisplay from "./pages/ProjectDisplay";
import ProjectDetail from "./components/Cards/ProjectDetail";
import ProjectIdea from "./components/Cards/ProjectIdea";
import About from "./pages/Footer/About";
import Careers from "./pages/Footer/Careers.jsx";
import Contact from "./pages/Footer/Contact.jsx";
import Grievance from "./pages/Footer/Grievance.jsx";
import Privacy from "./pages/Footer/Privacy.jsx";
import Terms from "./pages/Footer/Terms.jsx";
import UserGuidelines from "./pages/Footer/UserGuidelines.jsx";
import ThemeProvider from "./context/ThemeContext.jsx";
import { AdminHome } from "./admin/AdminHome.jsx";
import AdminUsers from "./admin/AdminUsers.jsx";
import ProjAdDetail from "./admin/fragments/ProjAdDetail.jsx";
import ProDiaAd from "./admin/fragments/ProDiaAd.jsx";
import IdeaCardAd from "./admin/fragments/IdeaCardAd.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import MentorProfile from "./pages/MentorProfile.jsx";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register-as" element={<RegisterChoice />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mentor-register" element={<MentorRegister />} />
          <Route path="/student-register" element={<StudentRegister />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/mentor-profile" element={<MentorProfile />} />
          <Route path="/upload-project" element={<ProjectForm />} />
          <Route path="/upload-idea" element={<IdeaForm />} />
          <Route path="/ideadisplay" element={<ProjectIdea />} />
          <Route path="/projectdisplay" element={<ProjectDisplay />} />
          <Route path="/projectdetail/:id" element={<ProjectDetail />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/userguidelines" element={<UserGuidelines />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/grievance" element={<Grievance />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/guidelines" element={<UserGuidelines />} />
          <Route path="/adminhome" element={<AdminHome/>} />
          <Route path="/admin-users" element={<AdminUsers/>} />
          <Route path="/admin-project-detail" element={<ProDiaAd/>} />
          <Route path="/admin-project-detail/:id" element={<ProjAdDetail/>} />
          <Route path="/admin-ideas-page" element={<IdeaCardAd/>} />
       
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
