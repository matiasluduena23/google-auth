"use server";
import { UserSchema } from "@/prisma/generated/zod/index";
import { z } from "zod";
import prisma from "./db";
import email from "next-auth/providers/email";

export async function updateUser(formData: FormData) {
  const id = formData.get("id") as string;

  const NewSchema = UserSchema.omit({
    id: true,
    createAt: true,
    updateAt: true,
    image: true,
  });

  const validatedFields = NewSchema.safeParse({
    role: formData.get("tipo"),
    email: formData.get("email"),
    name: formData.get("name"),
    visitas: 0,
  });
  console.log(validatedFields);

  if (validatedFields.error) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  try {
    await prisma.user.update({
      where: {
        id: id,
        email: validatedFields.data.email,
      },
      data: {
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        role: validatedFields.data.role,
      },
    });
  } catch (error) {
    console.log("Error updating the user", error);
  }
}
