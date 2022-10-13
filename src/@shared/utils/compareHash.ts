import { compare } from "bcrypt";

/*@function
/*@param {string} key - This param is your plain text  key
/*@param {string} hash - This param is yout hash to compare
 */
export function compareHash(key: string, hash: string) {
  return compare(key, hash);
}
