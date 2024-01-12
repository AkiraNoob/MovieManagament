"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";
import useGetMe from "~/hooks/user/useGetMe";

type TUserContext = {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
};

export const userContext = createContext<TUserContext>({
  isLogin: false,
  setIsLogin: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <userContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
      <Child />
    </userContext.Provider>
  );
};

function Child() {
  useGetMe();
  return <></>;
}
