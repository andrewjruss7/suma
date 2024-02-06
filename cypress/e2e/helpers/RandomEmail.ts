function generateRandomNumber() {
  return Math.floor(Math.random() * 1000);
}

export function generateEmail() {
  const randomPart1 = generateRandomNumber();

  const uniqueEmail = `andrew+${randomPart1}@sumawealth.com`;
  return uniqueEmail;
}
