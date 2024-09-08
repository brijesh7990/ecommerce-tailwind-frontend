import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { useTheme } from "../../context/ThemContext";
import { CiLight } from "react-icons/ci";
import { CgDarkMode } from "react-icons/cg";
import { NavLink } from "react-router-dom";

export default function NavbarComponent() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Navbar fluid rounded className="fixed top-0 left-0 right-0 z-10">
      <NavbarBrand>
        <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white dark:bg-gradient-to-r dark:from-yellow-300 dark:to-yellow-700 dark:via-red-500 dark:bg-clip-text dark:text-transparent">
          Ecommerce
        </span>
      </NavbarBrand>
      <div className="flex md:order-2 justify-center items-center gap-3">
        {theme === "light" ? (
          <CgDarkMode
            size={33}
            onClick={toggleTheme}
            className="cursor-pointer"
          />
        ) : (
          <CiLight
            color="white"
            size={33}
            onClick={toggleTheme}
            className="cursor-pointer"
          />
        )}
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 dark:text-blue-400"
              : "text-gray-700 dark:text-gray-400"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 dark:text-blue-400"
              : "text-gray-700 dark:text-gray-400"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 dark:text-blue-400"
              : "text-gray-700 dark:text-gray-400"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 dark:text-blue-400"
              : "text-gray-700 dark:text-gray-400"
          }
        >
          Pricing
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 dark:text-blue-400"
              : "text-gray-700 dark:text-gray-400"
          }
        >
          Contact
        </NavLink>
      </NavbarCollapse>
    </Navbar>
  );
}
