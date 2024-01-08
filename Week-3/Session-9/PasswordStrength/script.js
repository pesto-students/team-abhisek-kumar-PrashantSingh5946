function isStrongPassword(password) {
  //Check all the validation conditions
  if (
    password.length < 8 ||
    password.toLowerCase().includes("password") ||
    !/[A-Z]/.test(password)
  ) {
    return false;
  }

  return true;
}
