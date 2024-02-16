import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "7fq7cr",
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  includeShadowDom: false,
  retries: {
    runMode: 2,
    openMode: 1,
  },
  env: {
    register: "https://apiv2.reelit.ninja/api/v1/register",
  },
  e2e: {
    baseUrl: "https://development.sumawealth.io",
  },
});
