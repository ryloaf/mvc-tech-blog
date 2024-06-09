module.exports = {
  // method to generate a random emoji representing a book
  get_emoji: () => {
    const randomNum = Math.random();
    let book = "📗";

    // determine the emoji based on random number
    if (randomNum > 0.7) {
      book = "📘";
    } else if (randomNum > 0.4) {
      book = "📙";
    }

    // return the emoji wrapped in a span element with ARIA attributes
    return `<span for="img" aria-label="book">${book}</span>`;
  },
};