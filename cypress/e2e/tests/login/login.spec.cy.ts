import { AuthForm } from "../../organism/AuthForm";
import { Button } from "../../atoms/Button";
import { Alert } from "../../atoms/Alert";
import { CardTittle } from "../../atoms/Card";

const credentials = require("../../../fixtures/credentials/login.json");

describe("Login Functionality", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  credentials.forEach((credential, index) => {
    it.skip(`🧪 Test ${index + 1} -> ${credential.test} `, () => {
      AuthForm(credential.email, credential.password);
      Button("login");
      if (credential.expectedResult === "success") {
        CardTittle("titleCardAddYourBankAccount");
      } else if (credential.expectedResult === "error") {
        Alert("errorLogin");
      }
    });
  });
});
