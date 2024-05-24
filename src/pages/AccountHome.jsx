import React from "react";
import AccountForm from "../components/AccountForm";
import AccountMonthly from "../components/AccountMonthly";
import { useState } from "react";
import styled from "styled-components";

const Stsection = styled.section`
  margin: 40px;
`;

function AccountHome({
  totalExpenses,
  setTotalExpenses,
  filteredMonth,
  setFilteredMonth,
}) {
  // 전체 가계부 정보를 갖는 State
  return (
    <Stsection>
      <AccountForm setTotalExpenses={setTotalExpenses} />
      <AccountMonthly
        totalExpenses={totalExpenses}
        filteredMonth={filteredMonth}
        setFilteredMonth={setFilteredMonth}
      />
    </Stsection>
  );
}

export default AccountHome;
