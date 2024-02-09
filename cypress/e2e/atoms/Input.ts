import { createInput } from "../selectors/Selectors";
import { createInputMXAccount } from "../selectors/Selectors";
import { getIframeBody } from "../helpers/GetIFrame";

// SELECTORS FOR SUMA
export const inputSelectors = {
  email: createInput("email"),
  password: createInput("password"),
  firstName: createInput("firstName"),
  lastName: createInput("lastName"),
  phone: createInput("phone"),
};

export const Input = (fieldName: keyof typeof inputSelectors, text: string) => {
  const inputSelector = inputSelectors[fieldName];
  cy.get(inputSelector).type(text);
};

// SELECTORS FOR MX
export const mxSelectors = {
  loginMX: createInputMXAccount("LOGIN"),
  passwordMX: createInputMXAccount("PASSWORD"),
};

export const InputMX = (fieldName: keyof typeof mxSelectors, text: string) => {
  const inputMXSelector = mxSelectors[fieldName];
  cy.log("👀", inputMXSelector);
  getIframeBody().find(inputMXSelector).type(text);
};
