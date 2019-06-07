import { useState } from "react";

const useGlobalState = () => {
  const [state, setState] = useState({ value: "" });
  const [isAuth, setIsAuth] = useState({ value: false });

  const stateSetting = setting => {
    const { type, input } = setting;
    switch (type) {
      case "setState":
        return setState(input);
      default:
        return state;
    }
  };

  const authSetting = auth => {
    const { type, input } = auth;
    switch (type) {
      case "setIsAuth":
        return setIsAuth(input);
      default:
        return isAuth;
    }
  };

  return { state, stateSetting, isAuth, authSetting };
};

export default useGlobalState;
