import mongoose, { Document, Schema, Types } from "mongoose";

export interface IChat extends Document {
  users: string[];
  latestMessage: {
    text: string;
    sender: string;
  };
  pinnedMessages: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const schema: Schema<IChat> = new Schema(
  {
    users: [{ type: String, required: true }],
    latestMessage: {
      text: String,
      sender: String,
    },
    pinnedMessages: [{
      type: Schema.Types.ObjectId,
      ref: "Messages",
    }],
  },
  {
    timestamps: true,
  }
);

export const Chat = mongoose.model<IChat>("Chat", schema);
