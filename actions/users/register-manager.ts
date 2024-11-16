"use server";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";

export default async function registerManager(
  managerId: string,
  formData: FormData
) {
  let data: any = {};

  data.userEmail = formData.get("userEmail");
  data.userPassword = formData.get("userPassword");
  data.userRoles = "Manager";

  const response = await fetch(
    `${API_URL}/auth/register/${managerId}?role=manager`,
    {
      method: "POST",
      headers: { ...authHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
}
