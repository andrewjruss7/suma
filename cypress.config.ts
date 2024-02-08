import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  includeShadowDom: false,
  env: {
    register: "https://apiv2.reelit.ninja/api/v1/register",
  },
  e2e: {
    baseUrl: "https://development.sumawealth.io",
  },
});
