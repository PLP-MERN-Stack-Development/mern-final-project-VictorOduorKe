// models/SessionHash.js
import mongoose from "mongoose";


const SessionSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    hash_token: {
      type: String,
      required: true
    },
    expires_at: {
      type: Date,
      required: true
    },
  },
  { timestamps: true }
);

export default  mongoose.model("SessionToken", SessionSchema);
