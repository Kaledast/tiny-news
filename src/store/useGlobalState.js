import { useState } from "react";

const useGlobalState = () => {
  const [state, setState] = useState({ value: "" });
  const [isAuth, setIsAuth] = useState({ value: false });
  const [Key, setKey] = useState({ value: "" });

  const stateSetting = setting => {
    const { type, input } = setting;
    switch (type) {
      case "setState":
        return setState(input);
      default:
        return state;
    }
  };

  const auths = auth => {
    const { type, input } = auth;
    switch (type) {
      case "setIsAuth":
        return setIsAuth(input);
      default:
        return isAuth;
    }
  };

  const KeySetting = key => {
    const { type, input } = key;
    switch (type) {
      case "setKey":
        return setKey(input);
      default:
        return Key;
    }
  };

  return { state, stateSetting, isAuth, auths, KeySetting, Key };
};

export default useGlobalState;
