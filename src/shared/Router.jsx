import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../components/GlobalStyle";
import AccountHome from "../pages/AccountHome";
import AccountDetail from "../pages/AccountDetail";

function Router() {
  const [filteredMonth, setFilteredMonth] = useState([]);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <AccountHome
              filteredMonth={filteredMonth}
              setFilteredMonth={setFilteredMonth}
            />
          }
        />
        <Route
          path="detail/:id"
          element={
            <AccountDetail
              filteredMonth={filteredMonth}
              setFilteredMonth={setFilteredMonth}
            />
          }
        />
        {/* <Route /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
