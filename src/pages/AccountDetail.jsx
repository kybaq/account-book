import React from "react";
import { useLocation } from "react-router-dom";

function AccountDetail() {
  const location = useLocation();

  // id 를 가지고 비교를 해서 해당 expense 의 내용을 수정 / 삭제 가능하도록!

  return <div>AccountDetail</div>;
}

export default AccountDetail;
