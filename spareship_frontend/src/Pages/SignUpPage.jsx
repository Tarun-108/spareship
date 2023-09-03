import NavBar from "../Components/StdNavBar";
import SignUp from "../Components/SignUp";

const SignInPage = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="m-10 p-10 flex justify-center align-center">
        <SignUp />
      </div>
    </div>
  );
};

export default SignInPage;
