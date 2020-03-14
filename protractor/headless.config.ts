import { Config, browser } from "protractor";
import { reporter } from "./helpers/reporter";

export const config: Config = {
  framework: "jasmine",
  SELENIUM_PROMISE_MANAGER: false,
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--headless", "--disable-gpu"]
    }
  },
  specs: ["../test/google.spec.js"],
  onPrepare: () => {
    reporter();
    browser.ignoreSynchronization = true;
  }
};
