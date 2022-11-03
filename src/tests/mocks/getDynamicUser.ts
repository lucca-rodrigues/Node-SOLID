import { faker } from "@faker-js/faker";
import { uuid } from "uuidv4";

export function getDynamicUser() {
  const user = {
    id: uuid(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
  };
  return user;
}
