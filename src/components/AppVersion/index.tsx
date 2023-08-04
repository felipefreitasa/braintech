import Constants from "expo-constants";

import { Version } from "./styles";

export function AppVersion() {
  return (
    <Version>
      {`Version ${Constants.expoConfig?.version} • SDK ${Constants.expoConfig?.sdkVersion}`}
    </Version>
  );
}
