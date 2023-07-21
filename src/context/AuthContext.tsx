import { ReactNode, createContext, useState } from "react";

import { UserCredential } from "firebase/auth";

export type AuthContextDataProps = {
  loggedUser: UserCredential | undefined;
  setLoggedUser: React.Dispatch<
    React.SetStateAction<UserCredential | undefined>
  >;
  onboardingName: string;
  setOnboardingName: React.Dispatch<React.SetStateAction<string>>;
  onboardingEmail: string;
  setOnboardingEmail: React.Dispatch<React.SetStateAction<string>>;
  onboardingPassword: string;
  setOnboardingPassword: React.Dispatch<React.SetStateAction<string>>;
  isFetchingLoggedUser: boolean;
  setIsFetchingLoggedUser: React.Dispatch<React.SetStateAction<boolean>>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [onboardingName, setOnboardingName] = useState("");
  const [onboardingEmail, setOnboardingEmail] = useState("");
  const [loggedUser, setLoggedUser] = useState<UserCredential>();
  const [onboardingPassword, setOnboardingPassword] = useState("");
  const [isFetchingLoggedUser, setIsFetchingLoggedUser] = useState(true);

  return (
    <AuthContext.Provider
      value={{
        loggedUser,
        setLoggedUser,
        onboardingName,
        setOnboardingName,
        onboardingEmail,
        setOnboardingEmail,
        onboardingPassword,
        setOnboardingPassword,
        isFetchingLoggedUser,
        setIsFetchingLoggedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
