import React from "react";
import AccountForm from "../components/AccountForm";
import AccountMonthly from "../components/AccountMonthly";

import styled from "styled-components";

const Stsection = styled.section`
  margin: 40px;
`;

function AccountHome() {
  // localStorage 어떻게 이용할지 고민.

  return (
    <Stsection>
      <AccountForm />
      <AccountMonthly />
    </Stsection>
  );
}

export default AccountHome;
