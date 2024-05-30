import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AccountList from "./AccountList";
import { useSelector } from "react-redux";

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

// 그냥 1월부터 12월 배열로 직접 쓰는 거랑 비슷한듯...?
// props drilling 사용할 것임
// 지출내역 date 의 Month 가 선택한 것과 일치하는 것만 골라냄
function AccountMonthly() {
  const months = Array.from({ length: 12 }, (v, i) => `${i + 1}월`);
  const totalExpenses = useSelector((state) => state.totalExpenses);

  const [activeIndex, setActiveIndex] = useState(0);

  const filteredMonth = totalExpenses.filter(
    (expense) => Number(expense.date.split("-")[1]) === activeIndex + 1
  );

  return (
    <>
      <StmonthContainer>
        {months.map((month, index) => (
          <Stitem
            key={index}
            $active={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          >
            {month}
          </Stitem>
        ))}
      </StmonthContainer>
      <AccountList filteredMonth={filteredMonth} />
    </>
  );
}

export default AccountMonthly;
