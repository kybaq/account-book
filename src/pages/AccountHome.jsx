import React from "react";
import AccountForm from "../components/AccountForm";
import AccountMonthly from "../components/AccountMonthly";
import { useState } from "react";
import styled from "styled-components";
import { AccountContext } from "../contexts/AccountContext";
import { Provider } from "react-redux";
import store from "../redux/config/configStore";

const Stsection = styled.section`
  margin: 40px;
`;

function AccountHome() {
  return (
    <Provider store={store}>
      <Stsection>
        <AccountForm />
        <AccountMonthly />
      </Stsection>
    </Provider>
  );
}

export default AccountHome;
