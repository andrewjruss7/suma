import { Button, ButtonMX } from "../atoms/Button";
import { CardTittle } from "../atoms/Card";
import { FormAccount } from "../organism/FormAccount";
import { generatePhoneNumber } from "../helpers/RandomPhone";
import "cypress-iframe";
import { AuthMX } from "../organism/AuthMX";
import { SelectMX } from "../atoms/Select";
import { Tour } from "../organism/Tour";
import { AuthAPI } from "../helpers/APIS";

const happypathData = require("../../fixtures/happyPath/happyPath.json");

describe("Happy Path User in SUMA App", () => {
  beforeEach(() => {
    cy.clearAllLocalStorage();
    cy.visit("/login");
  });

  happypathData.forEach((data, index) => {
    it(`🧪 Test ${index + 1} -> ${data.test}`, () => {
      // API Auth
      AuthAPI();

      // Modal para Crear Cuenta
      CardTittle("titleCreateAnAccount");

      let phoneNumber = generatePhoneNumber();

      FormAccount(
        data.firstName,
        data.lastName,
        phoneNumber
        //   data.phone === "{GENERATE_PHONE_NUMBER}" ? phoneNumber : data.phone
      );

      // Botón de Crear Cuenta
      Button("continueCreateAccount");

      // Botón para Iniciar el tour
      Button("startNow");

      cy.wait(10000);

      // Tour por el mapa.
      Tour();

      // Conectar una cuenta
      Button("connectBankAccount");

      cy.wait(10000);

      // Conexión con MX
      SelectMX("MXBank");
      AuthMX("mxuser", "12345678");
      ButtonMX("MXButtonContinue");
      cy.wait(20000);
      cy.contains("Connection Successful").should("be.visible");
    });
  });
});
