// INPUT SELECTORS
export const createInput = (fieldName: string) => `[name="${fieldName}"]`;

// BUTTON SELECTORS
export const createButton = (identifier: string, buttonText: string) =>
  `button[type="${identifier}"]:contains('${buttonText}')`;

// ALERT SELECTORS
export const createAlert = (textAlert) => `span:contains('${textAlert}')`;

// CARD SELECTORS
export const createCardTittle = (tittle: any) => `h1:contains('${tittle}')`;

// IMG MX ACCOUNT
export const createClickMXAccount = () =>
  ":nth-child(2) > :nth-child(1) > a.block > .md:block > span";
