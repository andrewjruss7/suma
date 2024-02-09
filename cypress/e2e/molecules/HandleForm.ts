import { Input, InputMX } from "../atoms/Input";

export const HandleForm = {
  fillForm: (FormData: { [key: string]: string }) => {
    Object.entries(FormData).forEach(([field, value]) => {
      // @ts-ignore
      Input(field, value);
    });
  },
};

export const HandleFormMX = {
  fillFormMX: (FormData: { [key: string]: string }) => {
    Object.entries(FormData).forEach(([field, value]) => {
      // @ts-ignore
      InputMX(field, value);
    });
  },
};
