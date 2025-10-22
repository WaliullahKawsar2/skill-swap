import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Profile from "./Profile";
import Theme from "./Theme";
import 'animate.css';
import { FaUserNinja } from "react-icons/fa";

const navigation = [
  <NavLink to={"/"} className={`btn btn-sm btn-ghost`}>Home</NavLink>,
  <NavLink to={"/courses"} className={`btn btn-sm btn-ghost`}>Courses</NavLink>,
  <NavLink to={"/bookedSessions"} className={`btn btn-sm btn-ghost`}>Booked Sessions</NavLink>,
  <NavLink to={"/privacy-policy"} className={`btn btn-sm btn-ghost`}>Privacy Policy</NavLink>,
  <NavLink to={"/how-to-use"} className={`btn btn-sm btn-ghost`}>Details</NavLink>,
];


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };

  return (
    <Disclosure as="nav" className="bg-base-100 border-b border-base-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="btn btn-ghost btn-square">
              <Bars3Icon className="h-6 w-6" />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img alt="logo" src={logo} className="h-8 w-auto" />
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-2">
                {navigation.map((item) => (
                  item
                ))}
              </div>
            </div>
          </div>


          <div className="flex items-center gap-3">

              {
                user?
                <Profile />
                : <FaUserNinja />
              }

          <Theme></Theme>
          
            {user ? (
              <button onClick={handleLogOut} className="btn btn-sm">
                Log Out
              </button>
            ) : (
              <Link to="/login" className="btn btn-sm animate__animated animate__rubberBand animate__infinite	infinite">
                Log In
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="sm:hidden bg-base-200">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item,idx) => (
            <div key={idx}>
            {item}
            
            </div>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
