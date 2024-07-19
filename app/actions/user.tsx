"use server";

import client from "@/db";

export async function signup(
  email: string,
  password: string,
  name: string
): Promise<{}> {
  return { message: "Sign up success" };
}
