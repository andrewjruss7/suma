import { generateEmail } from "./RandomEmail";

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

    const token: string = response.body.data.token;
    cy.log("🥾 token obtenido: ", token);

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
