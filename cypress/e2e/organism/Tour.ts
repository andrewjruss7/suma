import { Button } from "../atoms/Button";

export const Tour = () => {
  const tourSteps = [
    "startTour",
    "nextTour",
    "nextTour",
    "nextTour",
    "nextTour",
    "nextTour",
    "nextTour",
    "startNow",
  ];

  tourSteps.forEach((step) => Button(step));
};
