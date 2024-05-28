import React from "react";
import AccountForm from "../components/AccountForm";
import AccountMonthly from "../components/AccountMonthly";
import { useState } from "react";
import styled from "styled-components";
import { AccountContext } from "../contexts/AccountContext";

const Stsection = styled.section`
  margin: 40px;
`;

function AccountHome() {
  // localStorage 어떻게 이용할지 고민.
  const fakeDate = [
    {
      id: "25600f72-56b4-41a7-a9c2-47358580e2f1",
      date: "2024-01-05",
      category: "식비",
      bill: 100000,
      description: "세광양대창",
    },
    {
      id: "25600f72-53b4-4187-a9c2-47358580e2f2",
      date: "2024-01-10",
      category: "도서",
      bill: 40500,
      description: "모던 자바스크립트",
    },
    {
      id: "24310f72-56b4-41a7-a9c2-458580ef1f3",
      date: "2024-02-02",
      category: "식비",
      bill: 50000,
      description: "회식",
    },
    {
      id: "25600f72-99b4-41z7-e4h6-47312365e2f4",
      date: "2024-02-02",
      category: "간식",
      bill: 500,
      description: "아이스크림",
    },
    {
      id: "25143e72-16e2-22a7-a9c2-47358580e2f5",
      date: "2024-03-02",
      category: "여행",
      bill: 1055000,
      description: "일본여행",
    },
    {
      id: "25600f72-97p2-14a7-a9c2-47363950e2t6",
      date: "2024-04-02",
      category: "미용",
      bill: 155000,
      description: "미용실",
    },
    {
      id: "24312f70-97q2-14a7-a9c2-47132950e2t8",
      date: "2024-05-02",
      category: "도서",
      bill: 75000,
      description:
        "자율주행차량 운전주행모드 자동 전환용 인식률 90% 이상의 다중 센서 기반 운전자 상태 인식 및 상황 인식 원천 기술 개발",
    },
  ];

  const totalExpensesFromLocal = JSON.parse(
    window.localStorage.getItem("totalExpenses")
  );
  const initialState = totalExpensesFromLocal
    ? totalExpensesFromLocal
    : fakeDate;

  const [totalExpenses, setTotalExpenses] = useState(initialState);
  const [filteredMonth, setFilteredMonth] = useState([]);
  // 전체 가계부 정보를 갖는 State

  return (
    <Stsection>
      <AccountContext.Provider
        value={{
          totalExpenses,
          setTotalExpenses,
          filteredMonth,
          setFilteredMonth,
        }}
      >
        <AccountForm />
        <AccountMonthly />
      </AccountContext.Provider>
    </Stsection>
  );
}

export default AccountHome;
