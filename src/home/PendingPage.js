import React from "react";
import Loading from "../news/Loading.js";
import StyledPendingPage from "../components/StyledPendingPage.js";

export default function PendingPage() {
  return (
    <StyledPendingPage>
      <Loading />
    </StyledPendingPage>
  );
}
