export function handleFirebaseSignUpErrors(errorMessage: string) {
  const firebaseSignUpErrors: { [key: string]: string } = {
    "auth/email-already-in-use": "The email is already in use",
    "auth/invalid-email": "The email address is invalid",
    "auth/operation-not-allowed": "The operation is not allowed",
    "auth/weak-password": "The password is weak",
    "auth/internal-error": "Internal server error",
    "default": "An unexpected error occurred",
  };

  return firebaseSignUpErrors[errorMessage] || firebaseSignUpErrors["default"];
}
