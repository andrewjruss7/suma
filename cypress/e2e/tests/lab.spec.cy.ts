import { generateEmail } from "../helpers/RandomEmail";
import { AuthForm } from "../organism/AuthForm";
import { Button } from "../atoms/Button";
import { CardTittle } from "../atoms/Card";
import { FormAccount } from "../organism/FormAccount";
import { Banner } from "../atoms/Banner";
import { generatePhoneNumber } from "../helpers/RandomPhone";

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

        // mdWidget

        cy.get('[id="mdWidget"]');
      });
    });
  });
});
