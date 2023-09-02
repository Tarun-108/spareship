import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Select,
    Option
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const SignIn = () => {
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
                    <Select className="outline-1" label="Select User Type">
                        <Option>Service Center</Option>
                        <Option>Planning Team</Option>
                        <Option>Warehouse Team</Option>
                        <Option>Customer Support</Option>
                    </Select>
                    <Input size="lg" label="Email" className="outline-1" />
                    <Input type="password" size="lg" label="Password" className="outline-1" />
                </div>
                <Checkbox
                    label={
                        <Typography
                            variant="small"
                            color="gray"
                            className="flex items-center font-normal"
                        >
                            I agree the
                            <a href="#" className="font-medium transition-colors hover:text-gray-900">
                                &nbsp;Terms and Conditions
                            </a>
                        </Typography>
                    }
                    containerProps={{ className: "-ml-2.5" }}
                />
                <Button className="mt-6" fullWidth>
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