import { Input } from "../atoms/Input";

export const HandleForm = {
  fillForm: (FormData: { [key: string]: string }) => {
    Object.entries(FormData).forEach(([field, value]) => {
      // @ts-ignore
      Input(field, value);
    });
  },
};
