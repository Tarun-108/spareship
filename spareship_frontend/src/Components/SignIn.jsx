import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, Input, Button, Typography, Select, Option } from "@material-tailwind/react";
import { API_URL, serviceCenter, warehouse, customerSupport, planning } from "../constants";

const SignIn = () => {

    const navigate = useNavigate();
    const [userType, setUserType] = useState(serviceCenter);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const saveToLocalStorage = (email, userType, user) => {
        localStorage.setItem("email", email)
        localStorage.setItem("userType", userType);
        localStorage.setItem("user", JSON.stringify(user));
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(`${API_URL}/auth/login`, { email, password, userType })
        if (response.status !== 200) {
            alert("error!");
        } else {
            switch (userType) {
                case serviceCenter:
                    navigate("/service-center");
                    saveToLocalStorage(response.data.email, userType, response.data.serviceCenterId,)
                    break;
                case planning:
                    navigate("/planning");
                    saveToLocalStorage(response.data.email, userType, "")
                    break;
                case warehouse:
                    navigate("/warehouse");
                    saveToLocalStorage(response.data.email, userType, response.data.warehouseId,)
                    break;
                default:
                    navigate("/customer-support")
                    saveToLocalStorage(response.data.email, userType, "")
                    break;
            }
        }
    }

    return (
        <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
                Sign In
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Enter your details to login.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                    <Select className="outline-1" label="Select User Type" value={userType} onChange={(value) => setUserType(value)}>
                        <Option value={serviceCenter}>Service Center</Option>
                        <Option value={planning}>Planning Team</Option>
                        <Option value={warehouse}>Warehouse Team</Option>
                        <Option value={customerSupport}>Customer Support</Option>
                    </Select>
                    <Input size="lg" label="Email" type="email" name="email" className="outline-1" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input size="lg" type="password" label="Password" name="password" className="outline-1" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Button className="mt-6" type="submit" fullWidth onClick={handleSubmit}>
                    Login
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    New Here?{" "}
                    <Link to="/signup" className="font-medium text-gray-900">
                        Sign Up
                    </Link>
                </Typography>
            </form>
        </Card>
    );
}

export default SignIn;