import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import styled from "styled-components";

const Stsection = styled.section`
  margin: 10px;
`;

function AccountForm({ setTotalExpenses }) {
  // 제어 컴포넌트
  const [date, setDate] = useState("");
  const [bill, setBill] = useState("");
  const [category, setCategory] = useState("식비");
  // Select tag 의 값을 받는 상태.
  const [description, setDescription] = useState("");
  // AccountHome 이 전체 소비 목록을 갖도록 설정하자.

  const onAccountFormSubmit = (evt) => {
    evt.preventDefault();

    if (!date || !bill || !category || !description) {
      Swal.fire({
        title: "오류",
        text: "빈 칸을 모두 채워주세요.",
        icon: "warning",
        confirmButtonText: "확인",
      });
      return;
    }
    if (isNaN(bill) || bill <= 0) {
      Swal.fire({
        title: "오류",
        text: "금액은 양수여야 합니다.",
        icon: "warning",
        confirmButtonText: "확인",
      });
      return;
    }

    const nextExpense = {
      id: uuidv4(),
      date,
      bill,
      category: category, // category 객체 속 value 임.
      description,
    };
    // console.log(nextExpense);

    setTotalExpenses((prevExpenses) => {
      const updatedExpenses = [...prevExpenses, nextExpense];
      window.localStorage.setItem(
        "totalExpenses",
        JSON.stringify(updatedExpenses)
      );
      return updatedExpenses;
    });
    setDate("");
    setBill("");
    setCategory("식비");
    setDescription("");
  };

  useEffect(() => {
    const savedExpenses = JSON.parse(
      window.localStorage.getItem("totalExpenses")
    );
    if (savedExpenses) {
      setTotalExpenses(savedExpenses);
    }
  }, [setTotalExpenses]);

  return (
    <Stsection>
      <form action="" onSubmit={(evt) => onAccountFormSubmit(evt)}>
        <input
          type="date"
          value={date}
          onChange={(evt) => setDate(evt.target.value)}
        />
        <select
          name="selectedCategory"
          value={category}
          onChange={(evt) => setCategory(evt.target.value)}
        >
          <option value="식비">식비</option>
          <option value="교통">교통</option>
          <option value="취미/여가">취미/여가</option>
          <option value="생활비">생활비</option>
        </select>
        <input
          type="number"
          placeholder="금액"
          value={bill}
          onChange={(evt) => setBill(evt.target.value)}
        />
        <input
          type="text"
          placeholder="지출 세부 내용"
          value={description}
          onChange={(evt) => setDescription(evt.target.value)}
        />
        <button type="submit">저장</button>
      </form>
    </Stsection>
  );
}

export default AccountForm;
