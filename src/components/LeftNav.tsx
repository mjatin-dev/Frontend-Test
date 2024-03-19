import React, { useState } from "react";
import logo from "../assets/icons/logo.png";
import evaly from "../assets/icons/evaly.png";
import menuIcon from "../assets/icons/indent-decrease.png";
import {
  adminNavItems,
  mainMenuNavItems,
  productsNavItems,
} from "../constants/appConstant";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import IconButton from "./styled/IconButton";

interface LeftNavProps {
  isNavOpen: boolean;
}

const NavContainer = styled.div<{ isVisible: boolean }>`
  background-color: #fff;
  color: #000;
  height: 100vh;
  padding: 15px;
  width: ${({ isVisible }) => (isVisible ? "260px" : "50px")};
  transition: opacity 0.3s ease-in-out, transform 0.2s ease-in-out;
`;

const NavTitle = styled.h2`
  font-family: Public Sans;
  font-size: 11px;
  font-weight: 400;
  color: #8b909a;
  line-height: 14px;
  text-align: left;
`;

const LeftNav: React.FC<LeftNavProps> = ({ isNavOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true); // State to manage visibility

  const navigateTo = (url: string) => {
    navigate(url);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const Nav = styled.nav`
    color: #fff;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `;

  const Logo = styled.img`
    width: 28px;
  `;
  const LogoText = styled.img`
    width: 50px;
    margin-left: 10px;
  `;

  const MenuButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    width: 26px;
    background-color: #fff;
  `;
  const MenuList = styled.ul`
    list-style-type: none;
    padding: 0;
  `;
  const MenuItem = styled.li`
    margin-bottom: 8px;
  `;
  const RotatedIcon = styled.img<{ isVisible: boolean }>`
    transform: ${({ isVisible }) => (!isVisible ? "rotate(180deg)" : "none")};
    transition: transform 0.3s ease-in-out;
  `;

  return (
    <>
      <NavContainer isVisible={isVisible}>
        {!isVisible ? (
          <MenuButton onClick={toggleVisibility}>
            <RotatedIcon src={menuIcon} alt="Menu" isVisible={isVisible} />
          </MenuButton>
        ) : (
          <Nav>
            <div>
              <Logo src={logo} alt="Logo" />
              <LogoText src={evaly} alt="Logo" />
            </div>
            <MenuButton onClick={toggleVisibility}>
              <RotatedIcon src={menuIcon} alt="Menu" isVisible={isVisible} />
            </MenuButton>
          </Nav>
        )}
        {isVisible && <NavTitle>MAIN MENU</NavTitle>}
        <MenuList>
          {mainMenuNavItems?.map((item) => (
            <MenuItem key={item.url}>
              <IconButton
                onClick={() => navigateTo(item.url)}
                icon={item.icon}
                text={isVisible ? item.title : ""}
                selected={location.pathname === item?.url}
              />
            </MenuItem>
          ))}
        </MenuList>
        {isVisible && <NavTitle>PRODUCTS</NavTitle>}
        <MenuList>
          {productsNavItems?.map((item) => (
            <MenuItem key={item.url}>
              <IconButton
                onClick={() => navigateTo(item.url)}
                icon={item.icon}
                text={isVisible ? item.title : ""}
                selected={location.pathname === item?.url}
              />
            </MenuItem>
          ))}
        </MenuList>
        {isVisible && <NavTitle>ADMIN</NavTitle>}
        <MenuList>
          {adminNavItems?.map((item) => (
            <MenuItem key={item.url}>
              <IconButton
                onClick={() => navigateTo(item.url)}
                icon={item.icon}
                text={isVisible ? item.title : ""}
                selected={location.pathname === item?.url}
              />
            </MenuItem>
          ))}
        </MenuList>
      </NavContainer>
    </>
  );
};

export default LeftNav;
