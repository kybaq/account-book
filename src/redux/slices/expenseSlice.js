import { createSlice } from "@reduxjs/toolkit";

const fakeData = [
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

// 컴포넌트 마운트 시 데이터를 가져온다.
const initialState =
  JSON.parse(window.localStorage.getItem("totalExpenses")) || fakeData; // 단축평가 사용.

// 아무런 데이터가 없다면,
if (initialState === fakeData) {
  window.localStorage.setItem(
    "totalExpenses",
    JSON.stringify(initialState) // 코드에 정의한 초기값을 사용한다
  );
}

const expenseSlice = createSlice({
  name: "totalExpenses",
  initialState,
  reducers: {
    // NOTE: redcuer 구현
    addExpense: (state, action) => {
      state.push(action.payload);
      window.localStorage.setItem("totalExpenses", JSON.stringify(state));
    },

    removeExpense: (state, action) => {
      const id = action.payload;

      const updatedExpense = state.filter((expense) => expense.id !== id);

      window.localStorage.setItem(
        "totalExpenses",
        JSON.stringify(updatedExpense)
      );

      return updatedExpense;
    },

    modifyExpense: (state, action) => {
      // action.payload 의 내용으로 바꿔버리기.
      const nextExpense = action.payload;

      console.log(nextExpense);

      const updatedExpense = state.map((expense) =>
        expense.id === nextExpense.id ? { ...expense, ...nextExpense } : expense
      );

      window.localStorage.setItem(
        "totalExpenses",
        JSON.stringify(updatedExpense)
      );

      return updatedExpense;
    },
  },
});

export const { addExpense, removeExpense, modifyExpense } =
  expenseSlice.actions;
export default expenseSlice.reducer;
