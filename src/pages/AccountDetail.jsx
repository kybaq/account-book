import Swal from "sweetalert2";
import React, { useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { modifyExpense, removeExpense } from "../redux/slices/expenseSlice";

function AccountDetail() {
  const param = useParams();
  const id = param.id;

  const navigate = useNavigate();

  const totalExpenses = useSelector((state) => state.totalExpenses); // store 에서 가져오기
  const selectedExpense = totalExpenses.find((expense) => expense.id === id);

  const dispatch = useDispatch();

  const dateRef = useRef(null);
  const categoryRef = useRef(null);
  const billRef = useRef(null);
  const descriptiontRef = useRef(null);

  const onHandleModify = () => {
    if (
      !dateRef.current.value ||
      !categoryRef.current.value ||
      !billRef.current.value ||
      !descriptiontRef.current.value
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
      date: dateRef.current.value,
      category: categoryRef.current.value,
      bill: billRef.current.value,
      description: descriptiontRef.current.value,
    };

    dispatch(modifyExpense(nextExpense));
    navigate("/");
    // Ref 값으로 기존 값을 대체해서 localStorage 에 올림.
  };

  const onHandleDelete = () => {
    const result = confirm("삭제하시겠습니까?");

    if (result) {
      dispatch(removeExpense(id));

      navigate("/");
    }
  };

  return (
    <section>
      <input
        type="date"
        ref={dateRef}
        onChange={(evt) => (dateRef.current.value = evt.target.value)}
        defaultValue={selectedExpense.date}
      />
      <select
        name="selectedCategory"
        ref={categoryRef}
        onChange={(evt) => (categoryRef.current.value = evt.target.value)}
        defaultValue={selectedExpense.category}
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
        onChange={(evt) => (billRef.current.value = evt.target.value)}
        defaultValue={selectedExpense.bill}
      />
      <input
        type="text"
        placeholder="지출 세부 내용"
        ref={descriptiontRef}
        onChange={(evt) => (descriptiontRef.current.value = evt.target.value)}
        defaultValue={selectedExpense.description}
      />
      <button type="submit" onClick={onHandleModify}>
        저장
      </button>
      <button type="submit" onClick={() => onHandleDelete(id)}>
        삭제
      </button>

      <Link to="/">뒤로가기</Link>
      {/* history 써서 뒤로 돌아가면 될듯 */}
    </section>
  );
}

export default AccountDetail;
