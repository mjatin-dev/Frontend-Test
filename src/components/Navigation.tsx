import React from "react";
import styled from "styled-components";
import logo from "../assets/icons/logo.png";
import menuIcon from "../assets/icons/indent-decrease.png";

interface NavigationProps {
  onToggleMenu: () => void; // Ensure onToggleMenu is defined as a function that takes no arguments and returns void
}

const Nav = styled.nav`
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* Converted from Tailwind CSS w-full */
`;

const Logo = styled.img`
  width: 28px;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 26px; /* Converted from Tailwind CSS w-26 */
  background-color: #fff; /* Converted from Tailwind CSS bg-white */
`;

const Navigation: React.FC<NavigationProps> = ({ onToggleMenu }) => {
  const handleToggleMenu = () => {
    onToggleMenu(); // Ensure that onToggleMenu is invoked correctly
  };

  return (
    <Nav>
      <div>
        <Logo src={logo} alt="Logo" />
        <MenuButton onClick={handleToggleMenu}>
          <img src={menuIcon} alt="Menu" />
        </MenuButton>
      </div>
    </Nav>
  );
};

export default Navigation;
