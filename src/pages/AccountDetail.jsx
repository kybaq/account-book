import Swal from "sweetalert2";
import React, { useRef } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

function AccountDetail() {
  const location = useLocation();

  const path = location.pathname.split("/");
  const id = path[path.length - 1];

  // NOTE:지금은 데이터 크기가 작아서 전체 목록에서 찾아도 문제 없겠지만, 사실은 filteredExpense 에서 내용을 가져오도록 해야 약간이나마 효율적일듯
  const totalExpenses = JSON.parse(
    window.localStorage.getItem("totalExpenses")
  );
  // localstorage 에서 데이터 받아오도록

  const dateRef = useRef(null);
  const categoryRef = useRef(null);
  const billRef = useRef(null);
  const descriptiontRef = useRef(null);

  const onHandleDetailFormSubmit = (evt) => {
    evt.preventDefault();

    if (
      !dateRef.current ||
      !categoryRef.current ||
      !billRef.current ||
      !descriptiontRef.current
    ) {
      Swal.fire({
        title: "오류",
        text: "빈 칸을 모두 채워주세요.",
        icon: "warning",
        confirmButtonText: "확인",
      });
      return;
    }

    const nextExpense = {
      id,
      date: dateRef.current,
      category: categoryRef.current,
      bill: billRef.current,
      description: descriptiontRef.current,
    };

    console.log(
      `수정: ${nextExpense.date} ${nextExpense.category} ${nextExpense.bill} ${nextExpense.description}`
    );

    totalExpenses.forEach((expense) => {
      if (expense.id === id) {
        expense.date = nextExpense.date;
        expense.category = nextExpense.category;
        expense.bill = nextExpense.bill;
        expense.description = nextExpense.description;
      }
    });

    // Ref 값으로 기존 값을 대체해서 localStorage 에 올림.
    window.localStorage.setItem("totalExpenses", JSON.stringify(totalExpenses));
  };

  return (
    <section>
      <form action="" onSubmit={onHandleDetailFormSubmit}>
        <input
          type="date"
          ref={dateRef}
          onChange={(evt) => (dateRef.current = evt.target.value)}
        />
        <select
          name="selectedCategory"
          ref={categoryRef}
          onChange={(evt) => (categoryRef.current = evt.target.value)}
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
      </form>
      <Link to="/">뒤로가기</Link>
      {/* history 써서 뒤로 돌아가면 될듯 */}
    </section>
  );
}

export default AccountDetail;
