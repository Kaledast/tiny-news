import { useState } from "react";

const useGlobalState = () => {
  const [state, setState] = useState({ value: "" });
  const [isAuth, setIsAuth] = useState({ value: false });

  const actions = action => {
    const { type, payload } = action;
    switch (type) {
      case "setState":
        return setState(payload);
      default:
        return state;
    }
  };

  const auths = auth => {
    const { type, payload } = auth;
    switch (type) {
      case "setIsAuth":
        return setIsAuth(payload);
      default:
        return isAuth;
    }
  };

  return { state, actions, isAuth, auths };
};

export default useGlobalState;
