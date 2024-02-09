import { generateEmail } from "../helpers/RandomEmail";
import { AuthForm } from "../organism/AuthForm";
import { Button, ButtonMX } from "../atoms/Button";
import { CardTittle } from "../atoms/Card";
import { FormAccount } from "../organism/FormAccount";
import { Banner } from "../atoms/Banner";
import { generatePhoneNumber } from "../helpers/RandomPhone";
import { getIframeBody } from "../helpers/GetIFrame"; // getIframeBody
import "cypress-iframe";
import { AuthMX } from "../organism/AuthMX";
import { SelectMX } from "../atoms/Select";

describe("Test Lab", () => {
  beforeEach(() => {
    cy.clearAllLocalStorage();
    cy.visit("/login");
  });

  it("Registro y verificación de correo", () => {
    const email: string = generateEmail();
    const password: string = "/Upp3rR00m";
    cy.log("Email Creado: ", email);

    cy.request({
      method: "POST",
      url: "https://apiv2.reelit.ninja/api/v1/register",
      body: {
        email: email,
        password: password,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);

      const token: string = response.body.data.verificationToken;
      cy.log("🥾 token obtenido: ", token);

      // API EMAIL VERIFICATION
      cy.request({
        method: "GET",
        url: `https://apiv2.reelit.ninja/api/v1/verify-email/${token}`,
      }).then((verificationResponse) => {
        expect(verificationResponse.status).to.equal(200);
        cy.log("👨🏻‍💻 Email verificado!");

        AuthForm(email, password);
        Button("login");
        CardTittle("titleCreateAnAccount");

        let numberPhone = generatePhoneNumber();
        cy.log("☎️", numberPhone);

        FormAccount("Andrew", "Mary", numberPhone);

        // Botón de Crear Cuenta
        Button("continueCreateAccount");

        // Botón para Iniciar el tour
        Button("startNow");

        // Botón para Iniciar tour dentro del tour
        cy.wait(5000);
        Button("startTour");

        Button("nextTour");

        Button("nextTour");

        Button("nextTour");

        Button("nextTour");

        Button("nextTour");

        Button("nextTour");

        Button("startNow");

        Button("connectBankAccount");

        cy.wait(5000);

        SelectMX("MXBank");
        AuthMX("mxuser", "12345678");
        ButtonMX("MXButtonContinue");

        cy.wait(20000);
        cy.contains("Connection Successful").should("be.visible");
      });
    });
  });
});
