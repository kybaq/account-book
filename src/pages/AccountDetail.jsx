import React, { useRef } from "react";
import Select from "react-select";
import { Link, useLocation } from "react-router-dom";

const options = [
  { value: "식비", label: "식비" },
  { value: "교통", label: "교통" },
  { value: "취미/여가", label: "취미/여가" },
  { value: "생활비", label: "생활비" },
];

function AccountDetail({ filteredMonth, setFilteredMonth }) {
  // fillteredMonth 를 받아 id 비교를 해서 해당 expense 의 내용을 수정 / 삭제 가능하도록!

  const location = useLocation();

  const path = location.pathname.split("/");
  const id = path[path.length - 1];

  console.log(id);

  const selectedExpense = filteredMonth.filter((expense) => expense.id === id);

  console.log(selectedExpense);

  // selectedExpense 를 수정하는 코드

  const dateRef = useRef();
  const categoryRef = useRef();
  const billRef = useRef();
  const descriptiontRef = useRef();

  const onHandleDetailFormSubmit = (evt) => {
    evt.preventDefault();

    nextExpense = {};

    // Ref 값으로 기존 값을 대체해서 setState로 저장하면 됨.
  };

  // setFilteredMonth((prev) => [...prev, selectedExpense]);

  return (
    <section>
      <form action="" onSubmit={onHandleDetailFormSubmit}>
        <input
          type="date"
          ref={dateRef}
          onChange={(evt) => (dateRef.current = evt.target.value)}
        />
        <Select
          // defaultValue={category}
          options={options}
          ref={categoryRef}
          onChange={(evt) => (categoryRef.current = evt.target.value)}
        />
        <input
          type="number"
          placeholder="금액"
          ref={billRef}
          onChange={(evt) => (billRef.current = evt.target.value)}
        />
        <input
          type="text"
          placeholder="지출 세부 내용"
          ref={descriptiontRef}
          onChange={(evt) => (descriptiontRef.current = evt.target.value)}
        />
        <button type="submit">저장</button>
        <button type="submit">삭제</button>
        <Link>뒤로가기</Link>
        {/* history 써서 뒤로 돌아가면 될듯 */}
      </form>
    </section>
  );
}

export default AccountDetail;
