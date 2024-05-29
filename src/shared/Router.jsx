import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../components/GlobalStyle";
import AccountHome from "../pages/AccountHome";
import AccountDetail from "../pages/AccountDetail";
import AccountContext from "../contexts/AccountContextProvider";

function Router() {
  const initialState = [
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

  // totalExpenses 를 설정할 때, 그냥 냅다 localstorage 에서 찾아오면 undefined 일 때 오류 생김.
  // 함수형으로 작성해 예외처리를 구현
  const [totalExpenses, setTotalExpenses] = useState(() => {
    // 컴포넌트 마운트 시 데이터를 가져온다.
    const storedExpenses = JSON.parse(
      window.localStorage.getItem("totalExpenses")
    );

    // 아무런 데이터가 없다면,
    if (!storedExpenses) {
      window.localStorage.setItem(
        "totalExpenses",
        JSON.stringify(initialState) // 코드에 정의한 초기값을 사용한다
      );
      return initialState; // {} 를 사용했으니, return 잊지 않고 사용
    } else return storedExpenses;
  });

  const [filteredMonth, setFilteredMonth] = useState([]);
  return (
    <BrowserRouter>
      <AccountContext.Provider
        value={{
          totalExpenses,
          setTotalExpenses,
          filteredMonth,
          setFilteredMonth,
        }}
      >
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<AccountHome />} />
          <Route path="detail/:id" element={<AccountDetail />} />
          {/* <Route /> */}
        </Routes>
      </AccountContext.Provider>
    </BrowserRouter>
  );
}

export default Router;
