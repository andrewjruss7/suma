import { createCardTittle } from "../selectors/Selectors";

export const tittles = {
  titleCardAddYourBankAccount: "ADD YOUR BANK ACCOUNT",
  titleCreateAnAccount: "Create an account",
};

export const CardTittle = (tittle: keyof typeof tittles) => {
  const text = tittles[tittle];
  const titleSelector = createCardTittle(text);

  cy.get(titleSelector).should("be.visible");
  cy.get(titleSelector).contains(text);
};
