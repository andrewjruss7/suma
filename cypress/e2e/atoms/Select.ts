import { createSelectMXBank } from "../selectors/Selectors";
import { getIframeBody } from "../helpers/GetIFrame";

// SELECTORS FOR MX
export const mxSelectors = {
  MXBank: createSelectMXBank("MX-Bank-row"),
};

export const SelectMX = (nameBank: keyof typeof mxSelectors) => {
  const inputSelector = mxSelectors[nameBank];
  getIframeBody().find(inputSelector).click();
};
