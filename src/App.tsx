import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components"; // Import styled-components
import LeftNav from "./components/LeftNav";
import MainContent from "./components/MainContent";
import DummyComponent from "./components/DummyComponent";


const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
`;

const App: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const handleToggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Router>
      <AppContainer>
        <LeftNav isNavOpen={isNavOpen} />
        <MainContent>
          <Routes>
            {/* Main Menu Routes */}
            <Route path="/" element={<DummyComponent title="Dashboard" />} />
            <Route
              path="/order-management"
              element={<DummyComponent title="Order Management" />}
            />
            <Route
              path="/customers"
              element={<DummyComponent title="Customers" />}
            />
            <Route
              path="/coupon-code"
              element={<DummyComponent title="Coupon Code" />}
            />
            <Route
              path="/categories"
              element={<DummyComponent title="Categories" />}
            />
            <Route
              path="/transaction"
              element={<DummyComponent title="Transaction" />}
            />
            <Route path="/brand" element={<DummyComponent title="Brand" />} />

            {/* Products Routes */}
            <Route
              path="/add-products"
              element={<DummyComponent title="Add Products" />}
            />
            <Route
              path="/product-list"
              element={<DummyComponent title="Produc tList" />}
            />

            {/* Admin Routes */}
            <Route
              path="/manage-admins"
              element={<DummyComponent title="Manage Admins" />}
            />
            <Route
              path="/admin-roles"
              element={<DummyComponent title="Admin Roles" />}
            />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
};

export default App;
