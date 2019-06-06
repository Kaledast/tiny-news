import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({
  component: Component,
  authenticated,
  handleApiKey,
  ...rest
}) => {
  console.log("protected", { ...rest });

  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect handleApiKey={handleApiKey} to="/login" />
        )
      }
    />
  );
};
