import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  font-size: 36px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
`;
const DummyComponent = ({ title }: { title: string }) => {
  return <Container>{title}</Container>;
};

export default DummyComponent;
