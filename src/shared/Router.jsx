import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../components/GlobalStyle";
import AccountHome from "../pages/AccountHome";
import AccountDetail from "../pages/AccountDetail";

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<AccountHome />} />
        <Route path="detail/:id" element={<AccountDetail />} />
        {/* <Route /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
