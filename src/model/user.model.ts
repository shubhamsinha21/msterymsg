// modelling of data - creating models

import mongoose, { Schema, Document } from "mongoose";

// writing type safety
// using extends -> it gets documented(goes to Documents) | part of mongoose

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

// creating schema with Method "Schema"
const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

// definig user - type safety
export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: boolean;
  isAcceptingMessage: boolean;
  messages: Message[];
}

// userSchema
const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    // adding custom message for false condition
    required: [true, "Username is required"],
    // if username has spaces
    trim: true,
    unique: true,
  },

  email: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    match: [
      /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
      "Please use a valid email address",
    ],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },

  verifyCode: {
    type: String,
    required: [true, "Verify code is required"],
  },

  verifyCodeExpiry: {
    type: Date,
    required: [true, "Verify code expiry data is required"],
  },

  isVerified: {
    type: Boolean,
    default: false,
  },

  isAcceptingMessage: {
    type: Boolean,
    default: true,
  },

  messages: [MessageSchema],
});

// exporting data - () not mandatory - as..... is a typescript
const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
