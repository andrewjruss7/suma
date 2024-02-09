import { HandleFormMX } from "../molecules/HandleForm";

export const AuthMX = (loginMX: string, passwordMX: string) => {
  cy.log("Sirve esto?!", loginMX);
  HandleFormMX.fillFormMX({
    loginMX: loginMX,
    passwordMX: passwordMX,
  });
};
