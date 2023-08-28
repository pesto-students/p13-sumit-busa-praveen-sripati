function isStrongPassword(password) {
  if (password.length < 8) {
      return false;
  }

  if (password.includes("password")) {
      return false;
  }

  if (password === password.toLowerCase()) {
      return false;
  }

  return true;
}

console.log(isStrongPassword("Qwerty"));           // false - Too short
console.log(isStrongPassword("passwordQwerty"));  // false - Contains "password"
console.log(isStrongPassword("qwerty123"));       // false - No uppercase characters
console.log(isStrongPassword("Qwerty123"));       // true
