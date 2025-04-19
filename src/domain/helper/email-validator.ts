import { DataBaseError } from "../../data-layer/errors/api-error";

export const validateEmail = async function (email: string) {
  if (!email) throw new DataBaseError("exist this email on DB");
};
