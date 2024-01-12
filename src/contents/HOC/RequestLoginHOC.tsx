"use client";

import { Dialog } from "@mui/material";
import { useContext, useState } from "react";
import { userContext } from "~/app/userProvider";
import useToggle from "~/hooks/useToggle";
import LoginForm from "./component/LoginForm";
import RegisterForm from "./component/RegisterForm";

const RequestLoginHOC = ({ children }: { children: React.ReactNode }) => {
  const [open, toggle] = useToggle();
  const { isLogin } = useContext(userContext);

  const [type, setType] = useState<"login" | "register">("login");

  return (
    <>
      <div
        onClick={(e) => {
          console.log(isLogin);
          if (!isLogin) {
            toggle();
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        {children}
      </div>
      {!isLogin && (
        <Dialog fullWidth maxWidth="sm" open={open} onClose={toggle}>
          {type === "login" ? (
            <LoginForm setType={setType} toggle={toggle} />
          ) : (
            <RegisterForm setType={setType} toggle={toggle} />
          )}
        </Dialog>
      )}
    </>
  );
};

export default RequestLoginHOC;
