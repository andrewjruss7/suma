import { createButton } from "../selectors/Selectors";

export const typeButtons = {
  login: createButton("submit", "Sign In"),
  register: createButton("submit", "Sign up"),
  continue: createButton("button", "Continue"),
  continueCreateAccount: createButton("submit", "Continue"),
  startNow: createButton("button", "Start now"),
  startTour: createButton("button", "Start"),
  nextTour: createButton("button", "Next"),
  connectBankAccount: createButton("button", "Connect bank account"),
  // accountmxBank: createButton("button", "MX Bank"),
};

export const Button = (button: keyof typeof typeButtons) => {
  const typeButton = typeButtons[button];
  cy.get(typeButton).click();
};
