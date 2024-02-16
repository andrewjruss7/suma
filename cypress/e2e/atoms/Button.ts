import { createButton } from "../selectors/Selectors";
import { createButtonMXAccount } from "../selectors/Selectors";
import { getIframeBody } from "../helpers/GetIFrame";

// BUTTONS FOR SUMA
export const typeButtons = {
  login: createButton("submit", "Sign In"),
  register: createButton("submit", "Sign up"),
  continue: createButton("button", "Continue"),
  continueCreateAccount: createButton("submit", "Continue"),
  startNow: createButton("button", "Start now"),
  startTour: createButton("button", "Start"),
  nextTour: createButton("button", "Next"),
  connectBankAccount: createButton("button", "Connect bank account"),
  moneyInsights: createButton("button", "MONEY INSIGHTS"), // View Breakdown
  viewBreakdown: createButton("button", "View Breakdown"),
};

export const Button = (button: keyof typeof typeButtons) => {
  const typeButton = typeButtons[button];
  cy.get(typeButton).click();
};

// BUTTONS FOR MX
export const MXButtons = {
  MXButtonContinue: createButtonMXAccount("submit", "Continue"),
};

export const ButtonMX = (buttonMX: keyof typeof MXButtons) => {
  const typeButton = MXButtons[buttonMX];
  cy.log("🧠 Button construido: ", typeButton);
  getIframeBody().find('[data-test="credentials-continue"]').click();
};
