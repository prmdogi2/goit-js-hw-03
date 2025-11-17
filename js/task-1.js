function slug(title) {
  return title.toLowerCase().split(" ").join("-");
}

console.log(slug("Arrays for begginers")); // "arrays-for-begginers"
console.log(slug("English for developer")); // "english-for-developer"
console.log(slug("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slug("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
