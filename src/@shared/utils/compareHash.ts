import { compare } from "bcrypt";

export function compareHash(key: string, hash: string) {
  return compare(key, hash);
}
