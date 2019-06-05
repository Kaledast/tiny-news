import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({
  authenticated,
  protectedPage,
  props,
  handleApiKey
}) {
  return (
    <Route
      render={props =>
        authenticated ? (
          <protectedPage {...props} />
        ) : (
          <Redirect handleApiKey={handleApiKey} to="/login" />
        )
      }
      {...props}
    />
  );
}
