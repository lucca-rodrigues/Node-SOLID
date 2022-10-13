import { hashSync } from "bcrypt";

export function encrypt(key: string, size: number) {
  return hashSync(key, size);
}
