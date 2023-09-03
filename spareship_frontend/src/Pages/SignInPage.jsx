import NavBar from "../Components/StdNavBar";
import SignIn from "../Components/SignIn";

const SignInPage = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="m-10 p-10 flex justify-center align-center">
        <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;
