import { Card, Input, Button, Typography, Select, Option } from "@material-tailwind/react";
import { useState } from "react";
import { API_URL, serviceCenter, warehouse, customerSupport, planning } from "../constants";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignIn = () => {

    const navigate = useNavigate();
    const [userType, setUserType] = useState(serviceCenter);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState();
    const [token, setToken] = useState();

    const saveToLocalStorage = (token, userType, user) => {
        localStorage.setItem("token", token);
        localStorage.setItem("userType", userType);
        localStorage.setItem("user", JSON.stringify(user));
    }


    const handleServiceCenterLogin = () => {
        fetch(`${API_URL}/auth/service_center/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        }).then((res) => res.json()).then((data) => {
            if (data.error) {
                alert(data.error);
            }
            else {
                setToken(data.token);
                setUser(data[serviceCenter]);
                saveToLocalStorage(data.token, userType, data[serviceCenter])
                navigate("/service_center");
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    const handlePlanningLogin = () => {
        fetch(`${API_URL}/auth/planning_team/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        }).then((res) => res.json()).then((data) => {
            if (data.error) {
                alert(data.error);
            }
            else {
                setToken(data.token);
                saveToLocalStorage(data.token, userType, {})
                navigate("/planning");
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    const handleWarehouseLogin = () => {
        fetch(`${API_URL}/auth/warehouse/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        }).then((res) => res.json()).then((data) => {
            if (data.error) {
                alert(data.error);
            }
            else {
                setToken(data.token);
                setUser(data[warehouse]);
                saveToLocalStorage(data.token, userType, data[warehouse])
                navigate("/warehouse");

            }
        }).catch((err) => {
            console.log(err);
        });
    }

    const handleCustomerSupportLogin = () => {
        fetch(`${API_URL}/auth/customer_support/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        }).then((res) => res.json()).then((data) => {
            if (data.error) {
                alert(data.error);
            }
            else {
                setToken(data.token)
                setUser(data.customer_support);
                saveToLocalStorage(data.token, userType, data.customer_support)
                navigate("/customer_support");
            }
        }).catch((err) => {
            console.log(err);
        });
    }


    const handleSubmit = () => {
        if (userType === serviceCenter) {
            handleServiceCenterLogin();
        }
        else if (userType === planning) {
            handlePlanningLogin();
        }
        else if (userType === warehouse) {
            handleWarehouseLogin();
        }
        else {
            handleCustomerSupportLogin();
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
                    <Input size="lg" label="Email" className="outline-1" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input type="password" size="lg" label="Password" className="outline-1" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Button className="mt-6" fullWidth onClick={handleSubmit}>
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