import React from "react";
import styled from "styled-components";

interface IconButtonProps {
  icon: string;
  text: string;
  onClick: () => void;
  selected?: boolean; // Define selected prop as optional
}

interface ButtonProps {
  selected?: boolean; // Define selected prop for the Button styled component
}

const Button = styled.button<ButtonProps>`
  // Pass ButtonProps to styled component
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: "Public Sans", sans-serif;
  font-size: 15px;
  font-weight: ${({ selected }) => (selected ? "bold" : "400")};
  line-height: 22px;
  border: none;
  width: 100%;
  border-radius: 10px;
  padding: 6px 10px;
  text-align: left;
  background-color: ${({ selected }) => (selected ? "#d3d4d8" : "#fff")};
  transition: background-color 0.3s, color 0.3s, font-weight 0.3s;

  &:hover {
    background-color: ${({ selected }) => (selected ? "#d3d4d8" : "#f3f4f8")};
    color: #000;
  }
`;

interface IconProps {
  selected?: boolean; // Define selected prop for the Icon styled component
}

const Icon = styled.img<IconProps>`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

interface TextProps {
  selected?: boolean;
}

const Text = styled.span<TextProps>`
  font-size: 16px;
  color: ${({ selected }) => (selected ? "#000" : "#8b909a")};
`;

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  text,
  onClick,
  selected,
}) => {
  return (
    <Button onClick={onClick} selected={selected}>
      <Icon src={icon} alt="Icon" selected={selected} />
      <Text selected={selected}>{text}</Text>
    </Button>
  );
};

export default IconButton;
