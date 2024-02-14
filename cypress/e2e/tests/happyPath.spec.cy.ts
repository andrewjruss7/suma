import { generateEmail } from "../helpers/RandomEmail";
import { AuthForm } from "../organism/AuthForm";
import { Button, ButtonMX } from "../atoms/Button";
import { CardTittle } from "../atoms/Card";
import { FormAccount } from "../organism/FormAccount";
import { generatePhoneNumber } from "../helpers/RandomPhone";
import "cypress-iframe";
import { AuthMX } from "../organism/AuthMX";
import { SelectMX } from "../atoms/Select";
import { Tour } from "../organism/Tour";

describe("Test Lab", () => {
  beforeEach(() => {
    cy.clearAllLocalStorage();
    cy.visit("/login");
  });

  it("Un usuario puede realizar todo el happy path de suma app. ", () => {
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

      const tokenVerify: string = response.body.data.verificationToken;
      const token: string = response.body.data.token;
      cy.log("🥾 token obtenido: ", token);

      // API EMAIL VERIFICATION
      cy.request({
        method: "GET",
        url: `https://apiv2.reelit.ninja/api/v1/verify-email/${tokenVerify}`,
      }).then((verificationResponse) => {
        expect(verificationResponse.status).to.equal(200);
        cy.log("👨🏻‍💻 Email verificado!");

        AuthForm(email, password);
        Button("login");
        CardTittle("titleCreateAnAccount");

        let numberPhone = generatePhoneNumber();

        FormAccount("Andrew", "Russ", numberPhone);

        // Botón de Crear Cuenta
        Button("continueCreateAccount");

        // Botón para Iniciar el tour
        Button("startNow");

        // Botón para Iniciar tour dentro del tour
        cy.wait(10000);

        Tour();

        Button("connectBankAccount");

        cy.wait(10000);

        SelectMX("MXBank");
        AuthMX("mxuser", "12345678");
        ButtonMX("MXButtonContinue");

        cy.wait(20000);
        cy.contains("Connection Successful").should("be.visible");
      });
    });
  });
});
