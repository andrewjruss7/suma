import { createInput } from "../selectors/Selectors";

export const inputSelectors = {
  email: createInput("email"),
  password: createInput("password"),
};

export const Input = (fieldName: keyof typeof inputSelectors, text: string) => {
  const inputSelector = inputSelectors[fieldName];
  cy.get(inputSelector).type(text);
};
