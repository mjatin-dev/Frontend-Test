// MainContent.tsx
import React, { ReactNode } from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

interface MainContentProps {
  children: ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>;
};

export default MainContent;
