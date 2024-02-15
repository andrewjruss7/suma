import { generateEmail } from "./RandomEmail";
import { Button } from "../atoms/Button";
import { AuthForm } from "../organism/AuthForm";

// API REGISTER
export function registerAndVerifyEmail() {
  const email: string = generateEmail();
  const password: string = "/Upp3rR00m";

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
    cy.log("🥾 token obtenido!");

    // API EMAIL VERIFICATION
    cy.request({
      method: "GET",
      url: `https://apiv2.reelit.ninja/api/v1/verify-email/${token}`,
    }).then((verificationResponse) => {
      expect(verificationResponse.status).to.equal(200);
      cy.log("👨🏻‍💻 Email verificado!");
    });
  });
}

export function AuthAPI() {
  const email: string = generateEmail();
  const password: string = "/Upp3rR00m";
  cy.log("Email Creado: ", email);

  // API REGISTER
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

      // Login
      AuthForm(email, password);
      Button("login");
    });
  });
}
