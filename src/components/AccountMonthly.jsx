import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AccountList from "./AccountList";

const StmonthContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  margin: 10px;
`;

const Stitem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props) =>
    props.$active ? "blue" : "rgba(0, 0, 0, 0.2)"};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: blue;
  }
`;

function AccountMonthly({
  /* totalExpenses ,*/ filteredMonth,
  setFilteredMonth,
}) {
  const months = Array.from({ length: 12 }, (v, i) => `${i + 1}월`);
  // 그냥 1월부터 12월 배열로 직접 쓰는 거랑 비슷한듯...?

  const [activeIndex, setAcitveIndex] = useState(0);

  // 손쉽게 데이터 수정 / 삭제 작업을 하기 위해서
  const totalExpenses = JSON.parse(
    window.localStorage.getItem("totalExpenses")
  );

  const changeMonth = () => {
    setFilteredMonth(() =>
      totalExpenses.filter(
        (expense) => Number(expense.date.split("-")[1]) == activeIndex + 1
      )
    );
  };

  useEffect(changeMonth, [activeIndex]);

  return (
    <>
      <StmonthContainer>
        {months.map((month, index) => (
          <Stitem
            key={index}
            $active={activeIndex === index}
            onClick={() => setAcitveIndex(index)}
          >
            {/* 클릭했을 때, 이벤트가 발생한 것의 index 를 activeIndex 로 설정하고 리렌더링 되면서 조건에 맞으면 acitve Button 이 된다 */}
            {month}
          </Stitem>
        ))}
      </StmonthContainer>
      <AccountList
        // totalExpenses={totalExpenses}
        filteredMonth={filteredMonth}
        setFilteredMonth={setFilteredMonth}
        // 지출 상세 페이지(AccountDetail) 에서 사용하기 위함.
      />
    </>
  );
}

export default AccountMonthly;
