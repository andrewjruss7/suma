import { Button, ButtonMX } from "../atoms/Button";
import { CardTittle } from "../atoms/Card";
import { FormAccount } from "../organism/FormAccount";
import { generatePhoneNumber } from "../helpers/RandomPhone";
import { getIframeMXInsight } from "../helpers/GetIFrame";
import "cypress-iframe";
import { AuthMX } from "../organism/AuthMX";
import { SelectMX } from "../atoms/Select";
import { Tour } from "../organism/Tour";
import { AuthAPI } from "../helpers/APIS";
import { AuthForm } from "../organism/AuthForm";
import { should } from "chai";

const happypathData = require("../../fixtures/happyPath/happyPath.json");

describe("Happy Path Tests - User Account and Trial Management", () => {
  beforeEach(() => {
    cy.clearAllLocalStorage();
    cy.visit("/login");
  });

  happypathData.forEach((data, index) => {
    // Registro de usuario y conexión de cuenta con MX a través del recorrido.
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

  // Usuario inicia sesión y verifica Insights (prueba gratuita activa).
  it("User logs in and verifies Insights (active free trial)", () => {
    AuthForm("andrew+1@sumawealth.com", "/Upp3rR00m");
    Button("login");
    cy.wait(5000);
    Button("moneyInsights");
    cy.wait(5000);
    cy.contains("You have more money than you think").should("be.visible");
    cy.wait(5000);
    getIframeMXInsight().find("p").contains("Hello").should("be.visible");
    getIframeMXInsight()
      .find("p")
      .contains(
        "Let's take a look at your finances and see what insights we have for you."
      )
      .should("be.visible");
  });

  // Usuario inicia sesión y verifica Fondo de Emergencia (prueba gratuita activa).
  it("User logs in and verifies Emergency Fund (active free trial)", () => {
    AuthForm("andrew+1@sumawealth.com", "/Upp3rR00m");
    Button("login");
    cy.wait(5000);
    cy.contains("EMERGENCY SAVINGS").should("be.visible");
    cy.contains("157.7").should("be.visible");
  });

  // Usuario inicia sesión y verifica Gastos (prueba gratuita activa).
  it.skip("User logs in and verifies Expenses (active free trial)", () => {
    AuthForm("andrew+1@sumawealth.com", "/Upp3rR00m");
    Button("login");
    cy.wait(5000);
    //  cy.contains("$8,714.69").should("be.visible");
    cy.contains("Needs").should("be.visible");
    cy.contains("Others").should("be.visible");
    cy.contains("Wants").should("be.visible");
    cy.contains("Subscriptions").should("be.visible");

    Button("viewBreakdown");

    cy.contains("Expenses").should("be.visible");
    cy.contains("16.2%").should("be.visible");
    cy.contains("14.8%").should("be.visible");
    cy.contains("69.0%").should("be.visible");
    cy.contains("0.0%").should("be.visible");

    cy.get("h1").contains("Needs").click();
    cy.contains("Maverik").should("be.visible");
    cy.contains("$67.83").should("be.visible");
    cy.get("h1").contains("Needs").click();

    cy.get("h1").contains("Wants").click();
    cy.contains("El Torito").should("be.visible");
    cy.contains("$10.41").should("be.visible");
    cy.get("h1").contains("Wants").click();

    cy.get("h1").contains("Others").click();
    cy.wait(5000);
    cy.get("span").invoke("text").should("not.be.empty");
    // cy.contains("Unknown").should("be.visible");
    // cy.contains("$41.54").should("be.visible");
    cy.get("h1").contains("Others").click();

    cy.get("h1").contains("Subscriptions").click();
    cy.contains("Netflix").should("be.visible");
    cy.contains("$72.89").should("be.visible");
    cy.get("h1").contains("Subscriptions").click();
  });

  // Usuario inicia sesión y verifica prueba gratuita activa de 14 días.
  it.skip("User logs in and verifies Expenses (active free trial)", () => {});

  // Usuario inicia sesión y encuentra que la prueba gratuita ha expirado, redirigido a suscripciones.
  it.skip("User logs in and verifies active 14-day free trial", () => {});

  // Usuario inicia sesión con una suscripción activa.
  it.skip("User logs in and encounters expired free trial, redirected to subscriptions", () => {});

  it.skip("User logs in with an active subscription", () => {});
});
