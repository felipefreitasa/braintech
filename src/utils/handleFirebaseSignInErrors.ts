export function handleFirebaseSignInErrors(errorMessage: string) {
  const firebaseSignInErrors: { [key: string]: string } = {
    "auth/invalid-email": "O endereço de e-mail é inválido",
    "auth/user-disabled": "Esta conta de usuário foi desabilitada",
    "auth/user-not-found": "Usuário não encontrado",
    "auth/wrong-password": "Senha incorreta",
    "auth/internal-error": "Erro interno do servidor",
    "default": "Ocorreu um erro inesperado",
  };

  return firebaseSignInErrors[errorMessage] || firebaseSignInErrors["default"];
}