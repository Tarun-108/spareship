import { Card, Input, Button, Typography, Select, Option } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { API_URL, serviceCenter, warehouse } from "../constants";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [addressLine, setAddressLine] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState(serviceCenter);
    const [token, setToken] = useState();
    const [user, setUser] = useState();

    const saveToLocalStorage = (token, userType, user) => {
        localStorage.setItem("token", token);
        localStorage.setItem("userType", userType);
        localStorage.setItem("user", JSON.stringify(user));
    }

    const handleSubmit = () => {
        if (userType === "Service Center") {
            fetch(`${API_URL}/auth/service_center/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, contact, addressLine, city, state, postalCode, password }),
            }).then((res) => res.json()).then((data) => {
                if (data.error) {
                    alert(data.error);
                }
                else {
                    saveToLocalStorage(data.token, userType, data[serviceCenter])
                    navigate("/service_center");
                }
            }).catch((err) => {
                console.log(err);
            });
        }
        else if (userType === "Warehouse") {
            fetch(`${API_URL}/auth/warehouse_team/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, contact, addressLine, city, state, postalCode, password }),
            }).then((res) => res.json()).then((data) => {
                if (data.error) {
                    alert(data.error);
                }
                else {
                    saveToLocalStorage(data.token, userType, data[warehouse])
                    navigate("/warehouse");
                }
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    return (
        <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
                Sign Up
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Enter your details to register.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                    <Select className="outline-1" label="Select User Type" value={userType} onChange={(value) => setUserType(value)}>
                        <Option value={serviceCenter}>Service Center</Option>
                        <Option value={warehouse}>Warehouse Team</Option>
                    </Select>
                    <Input size="lg" label="Name" className="outline-1" value={name} onChange={(e) => setName(e.target.value)} />
                    <Input size="lg" label="Contact Number" className="outline-1" value={contact} onChange={(e) => setContact(e.target.value)} />
                    <Input size="lg" label="Address Line" className="outline-1" value={addressLine} onChange={(e) => setAddressLine(e.target.value)} />
                    <Input size="lg" label="City" className="outline-1" value={city} onChange={(e) => setCity(e.target.value)} />
                    <Input size="lg" label="State" className="outline-1" value={state} onChange={(e) => setState(e.target.value)} />
                    <Input size="lg" label="Postal code" className="outline-1" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                    <Input size="lg" label="Email" className="outline-1" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input type="password" size="lg" label="Password" className="outline-1" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Button className="mt-6" fullWidth onClick={handleSubmit}>
                    Register
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Already have an account?{" "}
                    <Link to="/signin" className="font-medium text-gray-900">
                        Sign In
                    </Link>
                </Typography>
            </form >
        </Card >
    );
}

export default SignUp;