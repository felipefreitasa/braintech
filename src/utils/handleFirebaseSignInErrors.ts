export function handleFirebaseSignInErrors(errorMessage: string) {
  const firebaseSignInErrors: { [key: string]: string } = {
    "auth/invalid-email": "The email address is invalid",
    "auth/user-disabled": "This user account has been disabled",
    "auth/user-not-found": "User not found",
    "auth/wrong-password": "Incorrect password",
    "auth/internal-error": "Internal server error",
    "default": "An unexpected error occurred",
  };

  return firebaseSignInErrors[errorMessage] || firebaseSignInErrors["default"];
}
