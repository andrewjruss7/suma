import { AuthForm } from "../../organism/AuthForm";
import { Alert } from "../../atoms/Alert";
import { Button } from "../../atoms/Button";
import { generateEmail } from "../../helpers/RandomEmail";

const credentials = require("../../../fixtures/credentials/register.json");

describe("Register Functionality", () => {
  beforeEach(() => {
    cy.visit("/signup");
  });

  credentials.forEach((credential, index) => {
    it.skip(`🧪 Test ${index + 1} -> ${credential.test} `, () => {
      const generatedEmail = generateEmail();
      AuthForm(
        credential.email === "{GENERATE_UNIQUE_EMAIL}"
          ? generatedEmail
          : credential.email,
        credential.password
      );
      Button("register");
      if (credential.expectedResult === "success") {
        // Alert("registerSuccess");
      } else if (credential.expectedResult === "error") {
        Alert("errorRegister");
      } else if (credential.expectedResult === "errorPassMost8") {
        Alert("errorPassRegister");
      } else if (credential.expectedResult === "errorPassSecurity") {
        Alert("errorPassSecurity");
      }
    });
  });
});
