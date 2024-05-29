import React from "react";
import AccountForm from "../components/AccountForm";
import AccountMonthly from "../components/AccountMonthly";
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
