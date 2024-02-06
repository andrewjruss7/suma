import { HandleForm } from "../molecules/HandleForm";
import { Button } from "../atoms/Button";

export const AuthForm = (email: string, password: string) => {
  HandleForm.fillForm({
    email: email,
    password: password,
  });
};
