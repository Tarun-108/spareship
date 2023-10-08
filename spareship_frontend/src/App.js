import { Routes, Route, BrowserRouter } from "react-router-dom"
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import ServiceCenterPage from "./Pages/ServiceCenterPage";
import ServiceCenterInventoryPage from "./Pages/ServiceCenterInventoryPage";
import ServiceCenterComplaintPage from "./Pages/ServiceCenterComplaintPage";
import Planning from "./Pages/Planning";
import Warehouse from "./Pages/Warehouse";
import WarehouseInventory from "./Pages/WarehouseInventory";
import CustomerSupport from "./Pages/CustomerSupport";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/service-center" element={<ServiceCenterPage />} />
        <Route path="/service-center/inventory" element={<ServiceCenterInventoryPage />} />
        <Route path="/service-center/complaint" element={<ServiceCenterComplaintPage />} />
        <Route path="/warehouse" element={<Warehouse />} />
        <Route path="/warehouse/inventory" element={<WarehouseInventory />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/customer-support" element={<CustomerSupport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
