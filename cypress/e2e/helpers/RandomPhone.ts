export function generatePhoneNumber(): string {
  let phoneNumber = "5"; // We start the phone number with the country code (for example, Mexico is 52)

  // We generate 9 random digits for the phone number
  for (let i = 0; i < 9; i++) {
    phoneNumber += Math.floor(Math.random() * 10).toString();
  }

  return phoneNumber;
}

// Example usage
const randomPhoneNumber = generatePhoneNumber();
console.log(randomPhoneNumber); // This will print a random 10-digit phone number
