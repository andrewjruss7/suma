import { createClickMXAccount } from "../selectors/Selectors";

export const Banner = () => {
  const banner = createClickMXAccount();

  cy.get(banner).click();
};
