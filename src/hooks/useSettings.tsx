import { useContext } from "react"

import { SettingsContext, SettingsContextDataProps } from "@context/SettingsContext"

export function useSettings(): SettingsContextDataProps {
  const context = useContext(SettingsContext)

  return context
}