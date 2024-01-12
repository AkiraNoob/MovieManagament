import { Button, TextField } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import useRegister from "~/hooks/auth/useRegister";
import styles from "../RequestLoginHOC.module.scss";

function RegisterForm({
  setType,
  toggle,
}: {
  setType: Dispatch<SetStateAction<"login" | "register">>;
  toggle: () => void;
}) {
  const { mutate } = useRegister({
    onSuccess(data, variables, context) {
      setType("login");
    },
  });

  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <div className={styles.request_login_hoc}>
      <h2 className={styles.request_login_hoc_title}>Register</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault(),
            mutate({
              password,
              username,
              email,
              fullname,
              avatar: "",
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
        <TextField
          variant="outlined"
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          required // Removed the equal sign and value here
        />
        <TextField
          variant="outlined"
          label="Fullname"
          type="text"
          name="fullname"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          id="fullname"
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
          Register
        </Button>
      </form>
      <div className={styles.request_login_hoc_register_navigate}>
        Already have account?{" "}
        <span onClick={() => setType("login")}>Login</span>
      </div>
    </div>
  );
}

export default RegisterForm;
