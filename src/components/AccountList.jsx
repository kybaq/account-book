import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AccountContext from "../contexts/AccountContextProvider";

const Stul = styled.ul`
  background-color: white;
  padding: 10px;
  margin: 10px;
`;
const Stdiv = styled.div``;

const Stli = styled.li`
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  margin: 10px 0px;
  background-color: white;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.65);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.65);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.65);

  &:hover {
    cursor: pointer;

    @keyframes Rainbow {
      0% {
        color: #e74c3c;
      }
      20% {
        color: #e67e22;
      }
      35% {
        color: #f1c40f;
      }
      50% {
        color: #27ae60;
      }
      65% {
        color: #3498db;
      }
      85% {
        color: #8e44ad;
      }
      100% {
        color: #34495e;
      }
    }
    transition: all 0.3s ease 0s;
    animation: Rainbow 10s infinite;
  }
`;

const Stp = styled.p`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

function AccountList() {
  const context = useContext(AccountContext);

  const { filteredMonth } = context;

  return (
    <Stul>
      {filteredMonth.map((expense) => (
        <Link
          key={expense.id}
          to={`/detail/${expense.id}`}
          style={{ textDecoration: "none", color: "black" }}
          // Styled component 적용하면, 그런거 쓰지 말라고 오류 뜸.....
          state={{ expense }}
        >
          <Stli>
            <Stdiv>
              <Stp>{expense.date}</Stp>
              <Stp>{`${expense.category} - ${expense.description}`}</Stp>
            </Stdiv>
            <span>{expense.bill} 원</span>
          </Stli>
        </Link>
      ))}
    </Stul>
  );
}

export default AccountList;
