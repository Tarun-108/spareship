import NavBar from "../Components/StdNavBar";
import SignUp from "../Components/SignUp"
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../constants";

const SignInPage = () => {
    let navigate = useNavigate();

    if (isLoggedIn()) {
        navigate(`/${localStorage.getItem("userType")}`);
    }
    return (
        <div className="App">
            <NavBar />
            <div className="m-10 p-10 flex justify-center align-center">
                <SignUp />
            </div>
        </div>
    )
}

export default SignInPage;