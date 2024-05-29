import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AccountList from "./AccountList";
import { useContext } from "react";
import { AccountContext } from "../contexts/AccountContext";
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

function AccountMonthly({}) {
  const months = Array.from({ length: 12 }, (v, i) => `${i + 1}월`);
  // 그냥 1월부터 12월 배열로 직접 쓰는 거랑 비슷한듯...?

  // 손쉽게 데이터 수정 / 삭제 작업을 하기 위해서
  const totalExpenses = JSON.parse(
    window.localStorage.getItem("totalExpenses")
  );

  // const totalExpenses = useSelector((state) => state.totalExpenses); // NOTE:  변경사항 새로고침 없이 적용하려면 store 에서 불러올 필요가 없어보임....
  // console.log(totalExpenses);

  const [filteredMonth, setFilteredMonth] = useState([]); // props drilling 사용할 것임

  const [activeIndex, setAcitveIndex] = useState(0);

  const changeMonth = () => {
    setFilteredMonth(() =>
      totalExpenses.filter(
        (expense) => Number(expense.date.split("-")[1]) == activeIndex + 1 // 지출내역 date 의 Month 가 선택한 것과 일치하는 것만 골라냄
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
      <AccountList filteredMonth={filteredMonth} />
    </>
  );
}

export default AccountMonthly;
