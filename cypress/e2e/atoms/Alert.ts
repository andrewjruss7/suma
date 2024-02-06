import { createAlert } from "../selectors/Selectors";

export const alerts = {
  errorLogin: "The email or password is wrong.",
  errorRegister: "The email has already been registered.",
  errorPassRegister: "The password must be at least 8 characters.",
  errorPassSecurity: "The password field format is invalid.",
  // ALERT REGISTER
  registerSuccess:
    "You're almost there! We sent an email to andrew+9@sumawealth.com, click on the link to complete the signup.",
};

export const Alert = (alert: keyof typeof alerts) => {
  const text = alerts[alert];
  const alertSelector = createAlert(text);

  cy.get(alertSelector).should("be.visible");
  cy.get(alertSelector).contains(text);
};
