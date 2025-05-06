import { StatusError } from "itty-router";
export const authenticate = (request: Request) => {
  const token = request.headers.get("Authorization");
  if (!token || !token.startsWith("Bearer ")) {
    return new StatusError(401, "Unauthorized");
  }
  // Continue to next handler if authentication succeeds
};
