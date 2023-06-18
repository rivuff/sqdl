import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

function NavList(props) {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium "
                >
                    <a href="#" className=" text-black flex items-center hover:text-blue-500 transition-colors">
                        About
                    </a>
                </Typography>
            </li>           
             <li>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium "
                >
                    <Link className=" text-black flex items-center hover:text-blue-500 transition-colors" to="/login">
                        Login
                    </Link>
                </Typography>
            </li>            <li>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium "
                >
                    <Link className=" text-black flex items-center hover:text-blue-500 transition-colors"  to="/register">
                        Register
                    </Link>
                </Typography>
            </li>
        </ul>
    );
}

function NavBar(props) {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
            <div className="flex items-center justify-between text-blue-gray-900 ">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 text-2xl font-extrabold text-black"
                ><Link to="/">
                SQDL
                </Link>
                    
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden bg-slate-200"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
                
            </div>
            <Collapse open={openNav}>
                <NavList loginHandler ={props.loginHandler} registerHandler ={props.registerHandler}/>
            </Collapse>
        </Navbar>
    );
}

export default NavBar