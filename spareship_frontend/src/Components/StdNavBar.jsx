import { useState, useEffect } from "react";
import { Navbar, Collapse, Typography, Button, IconButton, Avatar } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const NavBar = () => {

    let navigate = useNavigate();
    const [user, setUser] = useState(localStorage.getItem("user"));
    const [openNav, setOpenNav] = useState(false);

    const handleLoginRedirect = () => {
        navigate("/signin");
    }

    const handleLogoutRedirect = () => {
        localStorage.clear()
        navigate("/")
    }

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    return (
        <div className="max-h-[768px] w-[calc(100%)]">
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-gray-900">
                    <div className="flex gap-1">
                        <IconButton className="bg-white p-0 w-20 h-auto" >
                            <Avatar alt="Logo" src="/Logo.png" className="h-6" />
                        </IconButton>
                        <Typography
                            className="mr-4 cursor-pointer py-1.5 font-medium"
                        >
                            <Link to="/">SpareShip</Link>
                        </Typography>
                    </div>
                    <div className="flex items-center gap-4">
                        {user ? <Button
                            variant="gradient"
                            size="sm"
                            className="hidden lg:inline-block"
                            onClick={handleLogoutRedirect}
                        >
                            <span>Logout</span>
                        </Button> : <Button
                            variant="gradient"
                            size="sm"
                            className="hidden lg:inline-block"
                            onClick={handleLoginRedirect}
                        >
                            <span>Login</span>
                        </Button>}
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>
                    <Button variant="gradient" size="sm" fullWidth className="mb-2">
                        <span>Buy Now</span>
                    </Button>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;