"use server";

export async function signup(
  email: string,
  password: string,
  name: string
): Promise<{}> {
  return { message: "Sign up success" };
}
