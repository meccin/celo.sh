import { persistentAtom } from "@nanostores/persistent";

export const theme = persistentAtom("theme", "light", {
  encode: JSON.stringify,
  decode: JSON.parse,
});
