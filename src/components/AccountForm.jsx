import React, { useState } from "react";
import Select from "react-select";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import styled from "styled-components";

const Stsection = styled.section`
  margin: 10px;
`;

const options = [
  { value: "식비", label: "식비" },
  { value: "교통", label: "교통" },
  { value: "취미/여가", label: "취미/여가" },
  { value: "생활비", label: "생활비" },
];

function AccountForm({ setTotalExpenses }) {
  // 제어 컴포넌트
  const [date, setDate] = useState("");
  const [bill, setBill] = useState("");
  const [category, setCategory] = useState(null);
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

    const nextExpense = {
      id: uuidv4(),
      date,
      bill,
      category: category.value, // category 객체 속 value 임.
      description,
    };
    // console.log(nextExpense);

    setTotalExpenses((prevExpense) => [...prevExpense, nextExpense]);
    setDate("");
    setBill("");
    setCategory(null);
    setDescription("");
  };

  return (
    <Stsection>
      <form action="" onSubmit={(evt) => onAccountFormSubmit(evt)}>
        <input
          type="date"
          value={date}
          onChange={(evt) => setDate(evt.target.value)}
        />
        <Select
          defaultValue={category}
          onChange={setCategory}
          options={options}
        />
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
