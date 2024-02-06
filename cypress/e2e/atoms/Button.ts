import { createButton } from "../selectors/Selectors";

export const typeButtons = {
  login: createButton("submit", "Sign In"),
  register: createButton("submit", "Sign up"),
  continue: createButton("button", "Continue"),
};

export const Button = (button: keyof typeof typeButtons) => {
  const typeButton = typeButtons[button];
  cy.get(typeButton).click();
};
