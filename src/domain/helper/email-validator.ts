import { DataBaseError } from "./errors/api-error";

export const validateEmail = async function (email: string) {
    if (!email) throw new DataBaseError("exist this email on DB");
}