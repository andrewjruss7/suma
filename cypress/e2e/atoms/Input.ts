import { createInput } from "../selectors/Selectors";

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
