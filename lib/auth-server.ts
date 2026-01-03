"use server";
import { headers } from "next/headers";
import { auth } from "./auth";

export const serverSession = async () => {
  return await auth.api.getSession({
    headers: await headers(),
  });
};
