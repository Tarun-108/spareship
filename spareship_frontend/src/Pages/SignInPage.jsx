import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/StdNavBar";
import SignIn from "../Components/SignIn"
import { customerSupport, isLoggedIn, planning, serviceCenter, warehouse } from "../constants";

const SignInPage = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState("");

    useEffect(() => {
        if (isLoggedIn()) {
            setUser(localStorage.getItem("user"))
        }
    }, [])

    useEffect(() => {
        switch (localStorage.getItem("userType")) {
            case serviceCenter:
                navigate(`/service-center`);
                break;
            case planning:
                navigate(`/planning`);
                break;
            case warehouse:
                navigate(`/warehouse`);
                break;
            case customerSupport:
                navigate(`/customer-support`);
                break;
            default:
                break;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    return (
        <div className="App">
            <NavBar />
            <div className="m-10 p-10 flex justify-center align-center">
                <SignIn />
            </div>
        </div>
    )
}

export default SignInPage;