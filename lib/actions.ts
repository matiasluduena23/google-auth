"use server";
import { UserSchema } from "@/prisma/generated/zod/index";
import prisma from "./db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export type State = {
  errors?: {
    role?: string[];
    email?: string[];
    name?: string[];
  };
  message?: string | null;
};

export async function updateUser(prevState: State, formData: FormData) {
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

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  const user = await prisma.user.findFirst({
    where: {
      email: validatedFields.data?.email,
    },
  });

  if (user) {
    return {
      errors: {
        role: [],
        name: [],
        email: ["El correo ya existe en la base de datos."],
      },
    };
  }

  try {
    await prisma.user.update({
      where: {
        id: id,
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

export async function createUser(State: State, formData: FormData) {
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

  const user = await prisma.user.findFirst({
    where: {
      email: validatedFields.data?.email,
    },
  });

  if (user) {
    return {
      errors: {
        role: [],
        name: [],
        email: ["El correo ya existe en la base de datos."],
      },
    };
  }
  if (!validatedFields.success) {
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

export async function eliminarUser(formData: FormData) {
  const id = formData.get("id") as string;

  try {
    if (id) {
      await prisma.user.delete({
        where: {
          id: id,
        },
      });
    }
  } catch (error) {
    console.log("Error deleting user", error);
  }
  revalidatePath("/usuarios");
}
