"use server";
import { UserSchema } from "@/prisma/generated/zod/index";
import prisma from "./db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function updateUser(formData: FormData) {
  const id = formData.get("id") as string;

  const NewSchema = UserSchema.omit({
    id: true,
    createAt: true,
    updateAt: true,
    image: true,
    visitas: true,
  });

  const validatedFields = NewSchema.safeParse({
    role: formData.get("tipo"),
    email: formData.get("email"),
    name: formData.get("name"),
  });

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
  revalidatePath("/usuarios");
  redirect("/usuarios");
}

export async function createUser(formData: FormData) {
  const NewSchema = UserSchema.omit({
    id: true,
    createAt: true,
    updateAt: true,
    image: true,
    visitas: true,
  });

  const validatedFields = NewSchema.safeParse({
    role: formData.get("tipo"),
    email: formData.get("email"),
    name: formData.get("name"),
  });

  if (validatedFields.error) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  try {
    await prisma.user.create({
      data: {
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        role: validatedFields.data.role,
      },
    });
  } catch (error) {
    console.log("Error creating the user", error);
  }
  revalidatePath("/usuarios");
  redirect("/usuarios");
}
