"use server";

import client from "@/db";
import jwt from "jsonwebtoken";
import { SignupResponse } from "@/interfaces/user-interface";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

export async function signup(
  email: string,
  password: string,
  name: string
): Promise<SignupResponse> {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await client.user.create({
      data: { email, password: hashedPassword, name },
    });

    const token = jwt.sign({ userId: user.id }, process.env.SECRET!);
    return { token };
  } catch (err) {
    console.error(err);
    throw new Error("User creation failed");
  }
}

export async function login(
  email: string,
  password: string
): Promise<SignupResponse | null> {
  try {
    const user = await client.user.findUnique({
      where: { email },
    });

    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return null;
    }

    const token = jwt.sign({ userId: user.id }, process.env.SECRET!);
    return { token };
  } catch (err) {
    console.error(err);
    throw new Error("User login failed");
  }
}
