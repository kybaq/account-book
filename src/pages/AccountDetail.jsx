import Swal from "sweetalert2";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

function AccountDetail({ totalExpenses, setTotalExpenses }) {
  // fillteredMonth 를 받아 id 비교를 해서 해당 expense 의 내용을 수정 / 삭제 가능하도록!

  const location = useLocation();
  const param = useParams();

  const expense = location.state.expense;
  const id = param.id;

  const dateRef = useRef(expense.date);
  const categoryRef = useRef(expense.category);
  const billRef = useRef(expense.bill);
  const descriptionRef = useRef(expense.description);

  const [expenseState, setExpenseState] = useState(expense); // NOTE: useRef 를 사용해 리렌더링을 막으려는 의도와는 조금 달라진 것 같기도하다

  const handleChange = (key, value) => {
    setExpenseState((prev) => ({ ...prev, [key]: value }));
  };

  // NOTE:지금은 데이터 크기가 작아서 전체 목록에서 찾아도 문제 없겠지만, 사실은 filteredExpense 에서 내용을 가져오도록 해야 약간이나마 효율적일듯
  // const totalExpenses = JSON.parse(
  //   window.localStorage.getItem("totalExpenses")
  // );
  // localstorage 에서 데이터 받아오도록

  // console.log(
  //   "1:",
  //   expense.date,
  //   expense.category,
  //   expense.bill,
  //   expense.description
  // );

  const onHandleSaveBtn = () => {
    const { date, category, bill, description } = expenseState;
    if (!date || !category || !bill || !description) {
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
      id,
      date,
      category,
      bill: Number(bill),
      description,
    };

    const updatedExpenses = totalExpenses.map((expense) =>
      expense.id === id ? { ...expense, ...nextExpense } : expense
    );
    // expense 객체를 펼쳐서, nextExpense 로 내용을 바꿈.
    // Ref 값으로 기존 값을 대체해서 localStorage 에 올림.

    setTotalExpenses(updatedExpenses);
    window.localStorage.setItem(
      "totalExpenses",
      JSON.stringify(updatedExpenses)
    );
    window.history.back();
  };

  const onHandleDeleteBtn = (id) => {
    const nextTotalExpenses = totalExpenses.filter(
      (expense) => expense.id !== id
    );
    window.localStorage.setItem(
      "totalExpenses",
      JSON.stringify(nextTotalExpenses)
    );
    window.history.back();
  };

  return (
    <section>
      <input
        type="date"
        ref={dateRef}
        onChange={(evt) => handleChange("date", evt.target.value)}
        value={expenseState.date}
      />
      <select
        ref={categoryRef}
        value={expenseState.category}
        onChange={(evt) => handleChange("category", evt.target.value)}
      >
        <option value="식비">식비</option>
        <option value="교통">교통</option>
        <option value="취미/여가">취미/여가</option>
        <option value="생활비">생활비</option>
      </select>
      <input
        type="number"
        placeholder="금액"
        ref={billRef}
        onChange={(evt) => handleChange("bill", evt.target.value)}
        value={expenseState.bill}
      />
      <input
        type="text"
        placeholder="지출 세부 내용"
        ref={descriptionRef}
        onChange={(evt) => handleChange("description", evt.target.value)}
        value={expenseState.description}
      />
      <button onClick={onHandleSaveBtn}>저장</button>
      <button onClick={onHandleDeleteBtn}>삭제</button>
      <Link to="/">뒤로가기</Link>
    </section>
  );
}

export default AccountDetail;
