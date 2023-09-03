import { Routes, Route, BrowserRouter } from "react-router-dom"
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import NavBar from "./Components/StdNavBar";
import ServiceCenterPage from "./Pages/ServiceCenterPage";
import ServiceCenterInventoryPage from "./Pages/ServiceCenterInventoryPage";
import ServiceCenterComplaintPage from "./Pages/ServiceCenterComplaintPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/service-center" element={<ServiceCenterPage />} />
        <Route path="/service-center/inventory" element={<ServiceCenterInventoryPage />} />
        <Route path="/service-center/complaint" element={<ServiceCenterComplaintPage />} />
        <Route path="/warehouse/" element={<div></div>} />
        <Route path="/planning" element={<div></div>} />
        <Route path="/customer-support" element={<div></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
