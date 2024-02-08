import { HandleForm } from "../molecules/HandleForm";

export const FormAccount = (
  firstName: string,
  lastName: string,
  phone: string
) => {
  HandleForm.fillForm({
    firstName: firstName,
    lastName: lastName,
    phone: phone,
  });
};
