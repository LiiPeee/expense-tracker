import mongoose, { Document, Schema, Types } from "mongoose";
import { Transaction } from "./transaction";

export interface IAccount extends Document {
  _id: Types.ObjectId;
  endDate: Date;
  createDate: Date;
  name: string;
  email: string;
  balance?: number;
  password: string;
  token?: string;
  transaction?: Transaction;
}
const accountSchema: Schema<IAccount> = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
    unique: true,
  },
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
});

export const AccountModel = mongoose.model<IAccount>("Account", accountSchema);
export default AccountModel;
