import { v4 as uuidv4 } from "uuid";

function generateUUID() {
  return uuidv4();
}

export function generateEmail() {
  const uuid = generateUUID();
  const uniqueEmail = `andrew+${uuid}@sumawealth.com`;
  return uniqueEmail;
}
