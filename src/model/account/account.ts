import mongoose, { Document, Schema } from "mongoose";
import { Transaction } from "../transaction/transaction";

export interface IAccount extends Document {
  _id: mongoose.Types.ObjectId;
  endDate: Date;
  createDate: Date;
  name: string;
  email: string;
  balance?: number;
  password: string;
  token?: string;
  transaction?: mongoose.Types.ObjectId[] | Transaction[];
}
const accountSchema: Record<string, any> = {
  name: {
    type: String,
    required: true,
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  balance: {
    type: Number,
    required: false,
    default: 0,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: false,
  },
  transaction: {
    type: String,
    required: false,
  },
};
const accounDefinition: Schema<IAccount> = new mongoose.Schema(accountSchema);

export const AccountModel = mongoose.model<IAccount>(
  "Account",
  accounDefinition
);
export default AccountModel;
