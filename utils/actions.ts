"use server";
import { readFile, writeFile } from "fs/promises";

type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export const createUsers = async (formData: FormData) => {
  "use server";
  const newUser: User = {
    id: new Date().getTime().toString(),
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
  };
  console.log(newUser);
  await saveUser(newUser);
};

export const getUsers = async (): Promise<User[]> => {
  const data = await readFile("users.json", "utf-8");
  const users = data ? JSON.parse(data) : [];
  return users;
};

export const saveUser = async (user: User) => {
  const users = await getUsers();
  console.log("Existing users:", users);
  users.push(user);
  await writeFile("users.json", JSON.stringify(users));
};
