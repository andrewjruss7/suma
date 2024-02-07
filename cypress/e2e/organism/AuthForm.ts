import { HandleForm } from "../molecules/HandleForm";

export const AuthForm = (email: string, password: string) => {
  HandleForm.fillForm({
    email: email,
    password: password,
  });
};
