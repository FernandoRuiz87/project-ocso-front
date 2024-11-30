import { TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import { cache } from "react";
import jwt from "jsonwebtoken";

export const authHeaders = cache(() => {
  const token = cookies().get(TOKEN_NAME)?.value;
  return {
    Authorization: `Bearer ${token}`,
  };
});

export const getUserRoles = cache(() => {
  const token = cookies().get(TOKEN_NAME)?.value;

  if (!token) {
    throw new Error("No token found");
  }

  // Verifica y decodifica el token
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY is not defined");
  }
  const decoded = jwt.verify(token, process.env.JWT_KEY) as jwt.JwtPayload & {
    userRoles?: string[];
  };

  if (!decoded || !decoded.userRoles) {
    throw new Error("Invalid token or roles not found");
  }

  // Devuelve los roles del usuario
  return decoded.userRoles;
});
