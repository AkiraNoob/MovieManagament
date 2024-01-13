import { Button, TextField } from "@mui/material";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { userContext } from "~/app/userProvider";
import useLogin from "~/hooks/auth/useLogin";
import styles from "../RequestLoginHOC.module.scss";
import { useRouter } from "next/navigation";

function LoginForm({
  setType,
  toggle,
}: {
  setType: Dispatch<SetStateAction<"login" | "register">>;
  toggle: () => void;
}) {
  const { setIsLogin } = useContext(userContext);
const router = useRouter();

  const { mutate } = useLogin({
    onSuccess() {
      toggle();
      setIsLogin(true);
      router.refresh();
    },
  });

  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  return (
    <div className={styles.request_login_hoc}>
      <h2 className={styles.request_login_hoc_title}>Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault(),
            mutate({
              password,
              username,
              token: "",
            });
        }}
        className={styles.request_login_hoc_form}
      >
        <TextField
          variant="outlined"
          label="Username"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          required // Removed the equal sign and value here
        />
        <TextField
          variant="outlined"
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          required // Removed the equal sign and value here
        />
        <Button
          className={styles.request_login_hoc_form_button}
          sx={{
            width: "fit-content",
          }}
          variant="primary"
          type="submit"
        >
          Login
        </Button>
      </form>
      <div className={styles.request_login_hoc_register_navigate}>
        Not have account?{" "}
        <span onClick={() => setType("register")}>Register</span>
      </div>
    </div>
  );
}

export default LoginForm;
