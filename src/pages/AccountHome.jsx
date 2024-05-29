import React from "react";
import AccountForm from "../components/AccountForm";
import AccountMonthly from "../components/AccountMonthly";
import styled from "styled-components";

const Stsection = styled.section`
  margin: 40px;
`;

function AccountHome() {
  return (
    <Stsection>
      <AccountForm />
      <AccountMonthly />
    </Stsection>
  );
}

export default AccountHome;
