import { ReactNode, createContext, useState } from "react"

import { UserCredential } from "firebase/auth"

export type AuthContextDataProps = {
  loggedUser: UserCredential | undefined;
  setLoggedUser: React.Dispatch<React.SetStateAction<UserCredential | undefined>>;
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps)

export function AuthContextProvider({ children }: AuthContextProviderProps){

  const [loggedUser, setLoggedUser] = useState<UserCredential>()

  return(
    <AuthContext.Provider value={{
      loggedUser,
      setLoggedUser,
    }}>
      {children}
    </AuthContext.Provider>
  )
}