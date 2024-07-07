export const initials = (text: string) => {
  // Split the text into words
  const words = text.split(' ');

  // Check if there's only one word
  if (words.length === 1) {
    // Return the first two letters of the single word
    return words[0].slice(0, 2).toUpperCase();
  }

  // Get the first letter of each word
  const firstLetters = words.map((word) => word.charAt(0).toUpperCase());

  // Join the first letters and limit to a maximum of 2 characters
  const initials = firstLetters.slice(0, 2).join('');

  return initials;
};
