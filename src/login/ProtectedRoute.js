import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({ pageComponent, props }) {
  return (
    <Route
      render={props => {
        if (authenticated) {
          return <pageComponent {...props} />;
        } else {
          return <Redirect to={"/login"} />;
        }
      }}
    />
  );
}
