export function generateRandomCharacters(numberOfCharacters) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const randomCharacters = [];
  while (randomCharacters.length < numberOfCharacters) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomCharacters.push(characters[randomIndex]);
  }
  return randomCharacters.join("");
}
