import mongoose from "mongoose";


const otpSchema = new mongoose.Schema(
  {
    otp_hash: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
    },
    expires_at: {
      type: Date,
      required: true
    }
  },
  { timestamps: true } // ✅ correct option name
);

export default  mongoose.model("OTP", otpSchema);
