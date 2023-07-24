export function handleFirebaseSignUpErrors(errorMessage: string) {
  const firebaseSignUpErrors: { [key: string]: string } = {
    "auth/email-already-in-use": "O e-mail já está sendo utilizado",
    "auth/invalid-email": "O endereço de e-mail é inválido",
    "auth/operation-not-allowed": "A operação não é permitida",
    "auth/weak-password": "A senha é fraca",
    "auth/internal-error": "Erro interno do servidor",
    "default": "Ocorreu um erro inesperado",
  };

  return firebaseSignUpErrors[errorMessage] || firebaseSignUpErrors["default"];
}
